# Family archive deployment

The archive lives at `/family/`. `middleware.js` checks a signed, HTTP-only session cookie before serving any archive page or asset, including direct PDF, image, and research-note links. Visitors enter one shared password and stay signed in for 30 days. Changing either server secret invalidates existing sessions.

## Vercel environment variables

Set both variables for Production and Preview in the existing `newfolio` project:

- `FAMILY_ARCHIVE_PASSWORD`: the shared family password, set only on the server.
- `FAMILY_ARCHIVE_CONTENT_KEY`: a randomly generated 32-byte hexadecimal key.

Missing variables deny archive access. A missing or incorrect content key fails the build, rather than publishing an incomplete or unprotected archive.

## Research files in a public repository

`private/family-archive.enc` contains an AES-256-GCM encrypted snapshot of the archive. The build decrypts it to the ignored `public/family/` directory, and Vite copies it into `dist/family/`. The password, encryption key, and plaintext research are never committed. Do not move plaintext archive files into another public directory or expose the build output through a host that does not run the middleware.

To refresh the encrypted snapshot, put the server variables in an ignored `.env.local` file and run:

```sh
npm run family:pack -- /absolute/path/to/family-history-site/public
npm run test:family
node --env-file=.env.local --run build
```

Only the encrypted snapshot and code changes should appear in `git status`. Never publish `dist/` or `public/family/` separately. `vite preview` is a static preview without the password middleware; use Vercel preview deployments to verify production authentication.

## Routing and verification

The portfolio fallback excludes `/family`, and the archive index has a `/family/` base URL so its relative links work with or without a trailing slash. Chapter and tree routes retain their hash URLs.

Before production, verify the portfolio, wrong-password rejection, login, a chapter, a person profile, an original PDF, and a direct `data.js` request in a signed-out browser. All archive responses are private and non-cacheable. The gate also sends `noindex` headers.
