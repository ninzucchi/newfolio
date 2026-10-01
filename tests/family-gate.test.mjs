import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, handleArchiveRequest, isFamilyPath, safeReturn } from '../server/family-gate.mjs';

const settings = { password: 'test-password', key: 'ab'.repeat(32) };
const origin = 'https://example.com';
const request = (path, options) => new Request(origin + path, options);
const login = (password, returnTo = '/family/') => handleArchiveRequest(request('/family/_unlock', {
  method: 'POST', headers: { origin, 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ password, returnTo }),
}), settings);

test('every archive resource requires the password, including direct source downloads', async () => {
  for (const path of ['/family', '/family/', '/family/index.html', '/family/data.js', '/family/styles.css', '/family/research/report.md', '/family/research/evidence/original.pdf', '/family/research/evidence/photo.png', '/%66amily/data.js', '/family%2Fdata.js']) {
    const response = await handleArchiveRequest(request(path), settings);
    assert.equal(response.status, 401, path);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
    assert.match(await response.text(), /type="password"/);
  }
});

test('the portfolio and unrelated paths remain available', async () => {
  for (const path of ['/', '/photos', '/assets/portfolio.js', '/family-history']) {
    assert.equal(await handleArchiveRequest(request(path), {}), null);
  }
});

test('absent server secrets fail closed', async () => {
  for (const incomplete of [{}, { password: settings.password }, { key: settings.key }]) {
    assert.equal((await handleArchiveRequest(request('/family/data.js'), incomplete)).status, 503);
  }
});

test('wrong passwords show a useful error without granting access', async () => {
  const response = await login('wrong');
  assert.equal(response.status, 401);
  assert.equal(response.headers.get('set-cookie'), null);
  assert.match(await response.text(), /aria-invalid="true"/);
});

test('correct password grants a protected cookie and returns to the chosen chapter', async () => {
  const response = await login(settings.password, '/family/#/chapter/lives');
  assert.equal(response.status, 303);
  assert.equal(response.headers.get('location'), '/family/#/chapter/lives');
  const cookie = response.headers.get('set-cookie');
  for (const attribute of ['Path=/family', 'HttpOnly', 'SameSite=Lax', 'Secure', 'Max-Age=2592000']) assert.ok(cookie.includes(attribute));
  assert.equal(await handleArchiveRequest(request('/family/research/evidence/original.pdf', { headers: { cookie: cookie.split(';')[0] } }), settings), null);
});

test('expired, forged, and password-rotated sessions are denied', async () => {
  const tokens = [
    createSession(settings, Date.now() - 31 * 86400000),
    createSession(settings).slice(0, -2) + 'XX',
    createSession({ ...settings, password: 'old-password' }),
    createSession({ ...settings, key: 'cd'.repeat(32) }),
    'true',
  ];
  for (const token of tokens) {
    assert.equal((await handleArchiveRequest(request('/family/data.js', { headers: { cookie: `family_archive=${token}` } }), settings)).status, 401);
  }
});

test('login cannot redirect visitors to an external or unrelated destination', async () => {
  for (const destination of ['https://evil.example/family/', '//evil.example/family/', '/photos', '/family-history', '/family/_unlock', '/family/../../photos']) {
    assert.equal(safeReturn(destination, origin), '/family/');
  }
  assert.equal((await login(settings.password, 'https://evil.example')).headers.get('location'), '/family/');
});

test('cross-origin or malformed login submissions are rejected', async () => {
  assert.equal((await handleArchiveRequest(request('/family/_unlock', { method: 'POST', headers: { origin: 'https://evil.example' } }), settings)).status, 403);
  assert.equal((await handleArchiveRequest(request('/family/_unlock', { method: 'POST' }), settings)).status, 400);
});

test('login HTML escapes supplied URLs and never contains server secrets', async () => {
  const response = await handleArchiveRequest(request('/family/?value=%22%3E%3Cscript%3E'), settings);
  const html = await response.text();
  assert.ok(!html.includes(settings.password));
  assert.ok(!html.includes(settings.key));
  assert.match(response.headers.get('content-security-policy'), /frame-ancestors 'none'/);
});

test('path recognition handles exact boundaries and encoded spellings', () => {
  for (const path of ['/family', '/family/', '/%66amily/data.js', '/family%2Fresearch/a.pdf', '//family/data.js']) assert.ok(isFamilyPath(path), path);
  for (const path of ['/families', '/family-history', '/photos']) assert.ok(!isFamilyPath(path), path);
});
