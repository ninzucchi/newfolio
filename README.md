# Portfolio

A small, fast, content-driven portfolio for a technical product designer.

## Tech Stack

- **Language**: TypeScript
- **UI**: React
- **Routing**: TanStack Router
- **Bundler**: Vite
- **Styling**: CSS Modules + PostCSS
- **UI Components**: Base UI
- **Animation**: Framer Motion
- **Icons**: Hugeicons

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or >=22.12.0 recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Build the static site for production:

```bash
npm run build
```

The static files will be output to the `dist` directory, ready for deployment to Vercel or any static hosting service.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  app/
    router.tsx              # TanStack Router configuration
    layout/
      RootLayout.tsx        # Main layout with header/nav/footer
  pages/
    about/                  # About page
    work/                   # Work/projects pages
    sandbox/                # Sandbox page
  components/
    nav/                    # Navigation component
    footer/                 # Footer component
    ui/                     # Reusable UI components
  styles/
    globals.css             # Global styles and resets
    tokens.css              # Design tokens (colors, spacing, typography)
  lib/
    routes.ts               # Route helpers/types
```

## Routes

- `/` - Index (redirects to About)
- `/about` - About page
- `/work` - Projects listing
- `/work/:slug` - Individual project detail
- `/sandbox` - Sandbox for experiments

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the Vite configuration and deploy

The build produces a static bundle suitable for any static hosting service.

## Code Quality

- **Linting**: ESLint with TypeScript + React rules
- **Formatting**: Prettier
- **Type Checking**: TypeScript in strict mode

Run linting:

```bash
npm run lint
```
