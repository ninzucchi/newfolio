import test from 'node:test';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { encryptContent, decryptContent, safeOutputPath } from '../scripts/family-content.mjs';

test('archive encryption preserves binary documents and hides source text', () => {
  const key = randomBytes(32);
  const files = [['index.html', Buffer.from('Private family story').toString('base64')], ['research/record.pdf', randomBytes(1024).toString('base64')]];
  const encrypted = encryptContent(files, key);
  assert.deepEqual(decryptContent(encrypted, key), files);
  assert.ok(!encrypted.includes(Buffer.from('Private family story')));
  assert.ok(!encrypted.includes(Buffer.from('index.html')));
  assert.ok(!encrypted.equals(encryptContent(files, key)));
});

test('wrong keys and modified archive bytes fail authentication', () => {
  const key = randomBytes(32);
  const encrypted = encryptContent([['index.html', 'dGVzdA==']], key);
  assert.throws(() => decryptContent(encrypted, randomBytes(32)));
  encrypted[encrypted.length - 1] ^= 1;
  assert.throws(() => decryptContent(encrypted, key));
});

test('archive extraction rejects absolute paths, traversal, and hidden files', () => {
  for (const path of ['../file', '/etc/passwd', 'research/../../outside', 'research\\outside', '.env', 'research/.secret', '']) {
    assert.throws(() => safeOutputPath(path, '/tmp/family'));
  }
  assert.equal(safeOutputPath('research/document.pdf', '/tmp/family'), '/tmp/family/research/document.pdf');
});
