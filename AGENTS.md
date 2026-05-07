# AGENTS.md

## Cursor Cloud specific instructions

This is a React/TypeScript SPA (portfolio website) built with Vite 7, React 19, TanStack Router, and Tailwind CSS 4. There is no backend, database, or Docker dependency.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on http://localhost:5173) |
| Lint | `npm run lint` |
| Build | `npm run build` (runs `tsc -b && vite build`) |
| Format | `npm run format` |
| Format check | `npm run format:check` |

### Notes

- Node 22 is required (see `.nvmrc`).
- The package manager is **npm** (lockfile: `package-lock.json`).
- No environment variables are needed to run the dev server. External data (Cloudinary images, GitHub contributions API) is fetched client-side from public endpoints.
- The `scripts/fetch-cloudinary-images.ts` script requires a `.env` with Cloudinary API keys, but this is only for regenerating `photo-ids.ts` and is not needed for normal development.
- There are no automated tests configured in this project (no test runner or test scripts in `package.json`).
