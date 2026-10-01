import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

const cookieName = 'family_archive';
const sessionSeconds = 60 * 60 * 24 * 30;
export const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'same-origin',
};

function normalizedPath(path) {
  try {
    // Check encoded spellings as well as the ordinary /family path.
    for (let i = 0; i < 3; i++) {
      const decoded = decodeURIComponent(path);
      if (decoded === path) break;
      path = decoded;
    }
    return path.replaceAll('\\', '/').replace(/\/{2,}/g, '/');
  } catch { return path; }
}

export function isFamilyPath(path) {
  path = normalizedPath(path);
  return path === '/family' || path.startsWith('/family/');
}

function equal(a, b) {
  const digest = value => createHash('sha256').update(value).digest();
  return timingSafeEqual(digest(a), digest(b));
}

function signature(payload, settings) {
  return createHmac('sha256', settings.key).update(`${settings.password}\0${payload}`).digest('base64url');
}

export function createSession(settings, now = Date.now()) {
  const payload = `v1.${Math.floor(now / 1000) + sessionSeconds}`;
  return `${payload}.${signature(payload, settings)}`;
}

function authenticated(request, settings) {
  const cookie = (request.headers.get('cookie') || '').split(';').map(v => v.trim()).find(v => v.startsWith(`${cookieName}=`));
  const value = cookie?.slice(cookieName.length + 1) || '';
  const match = /^v1\.(\d{10})\.([\w-]{43})$/.exec(value);
  if (!match || Number(match[1]) <= Date.now() / 1000) return false;
  return equal(match[2], signature(`v1.${match[1]}`, settings));
}

function escape(value) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

export function safeReturn(value, origin) {
  try {
    const url = new URL(value, origin);
    if (url.origin === origin && isFamilyPath(url.pathname) && normalizedPath(url.pathname) !== '/family/_unlock') {
      return url.pathname + url.search + url.hash;
    }
  } catch { /* Use the archive contents page for invalid destinations. */ }
  return '/family/';
}

function loginPage(destination, error = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Enter the archive · Inzucchi</title>
<style>
:root{color-scheme:light;--paper:oklch(.93105 .02628 82.38);--sheet:oklch(.97154 .01711 84.59);--ink:oklch(.29794 .01926 56.88);--muted:oklch(.48365 .03735 68.28);--accent:oklch(.49255 .10717 39.72);--rule:oklch(.81279 .04594 79.23)}
*{box-sizing:border-box}body{margin:0;min-height:100svh;background:var(--paper);color:var(--ink);font:18px/1.6 Georgia,serif;display:flex;flex-direction:column}header,footer{margin:0 6vw;padding:28px 0;font:11px/1.6 'Courier New',monospace;letter-spacing:.08em}header{border-bottom:1px solid var(--rule);color:var(--accent)}main{width:min(100% - 48px,440px);margin:auto;padding:60px 0 80px}h1{font-weight:400;font-size:44px;line-height:1.1;letter-spacing:-.04em;margin:0 0 20px}p{color:var(--muted);margin:0 0 32px}label{display:block;font:13px/1.5 Arial,sans-serif;margin-bottom:9px}input,button{font:17px/1.4 Arial,sans-serif;border-radius:0;min-height:52px;width:100%;padding:12px 14px}input{border:1px solid var(--muted);background:var(--sheet);color:var(--ink)}button{margin-top:18px;border:1px solid var(--accent);background:var(--accent);color:var(--sheet);cursor:pointer}button:hover{background:var(--ink);border-color:var(--ink)}button:active{transform:translateY(1px)}input:focus-visible,button:focus-visible,a:focus-visible{outline:2px solid var(--accent);outline-offset:4px}.error{font:14px/1.5 Arial,sans-serif;color:var(--accent);margin:12px 0 0}.note{font:11px/1.7 'Courier New',monospace;margin:20px 0 0}footer{border-top:1px solid var(--rule);color:var(--muted)}a{color:inherit;text-underline-offset:4px}@media(max-width:480px){h1{font-size:38px}header,footer{margin:0 24px}main{padding:48px 0}}
</style></head><body><header>THE INZUCCHI FAMILY ARCHIVE</header><main><h1>A history<br>kept close.</h1><p>Enter the family password to open the archive.</p><form action="/family/_unlock" method="post"><input type="hidden" id="return-to" name="returnTo" value="${escape(destination)}"><label for="password">Family password</label><input id="password" name="password" type="password" autocomplete="current-password" required ${error ? 'aria-invalid="true" aria-describedby="password-error"' : ''}>${error ? `<p class="error" id="password-error" role="alert">${escape(error)}</p>` : ''}<button type="submit">Open the archive <span aria-hidden="true">→</span></button><p class="note">This browser will remember you for 30 days.</p></form></main><footer><a href="/">Back to Nick’s website</a></footer><script>if(location.hash)document.getElementById('return-to').value+=location.hash;</script></body></html>`;
}

function page(destination, error = '', status = 401) {
  return new Response(loginPage(destination, error), {
    status,
    headers: { ...privateHeaders, 'Content-Type': 'text/html; charset=utf-8', 'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'" },
  });
}

// null tells the platform to continue to the static file. The gate also runs on
// direct asset requests, before Vercel's cache, not just the archive's HTML page.
export async function handleArchiveRequest(request, settings) {
  const url = new URL(request.url);
  if (!isFamilyPath(url.pathname)) return null;
  if (!settings.password || !/^[a-f\d]{64}$/i.test(settings.key || '')) {
    return new Response('The archive is temporarily unavailable. Please try again later.', { status: 503, headers: privateHeaders });
  }
  if (normalizedPath(url.pathname) === '/family/_unlock' && request.method === 'POST') {
    if (request.headers.get('origin') && request.headers.get('origin') !== url.origin) {
      return new Response('Please sign in from this website.', { status: 403, headers: privateHeaders });
    }
    if (!request.headers.get('content-type')?.startsWith('application/x-www-form-urlencoded')) {
      return new Response('Invalid sign-in form.', { status: 400, headers: privateHeaders });
    }
    const body = await request.text();
    if (body.length > 8192) return new Response('Sign-in form is too large.', { status: 413, headers: privateHeaders });
    const form = new URLSearchParams(body);
    const destination = safeReturn(form.get('returnTo') || '/family/', url.origin);
    if (!equal(form.get('password') || '', settings.password)) return page(destination, 'That password didn’t match. Please try again.');
    const secure = url.protocol === 'https:' ? '; Secure' : '';
    return new Response(null, { status: 303, headers: {
      ...privateHeaders,
      Location: destination,
      'Set-Cookie': `${cookieName}=${createSession(settings)}; Path=/family; Max-Age=${sessionSeconds}; HttpOnly; SameSite=Lax${secure}`,
    } });
  }
  if (authenticated(request, settings)) return null;
  return page(safeReturn(url.pathname + url.search, url.origin));
}
