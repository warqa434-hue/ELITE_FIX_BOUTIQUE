# AGENTS.md

## Cursor Cloud specific instructions

This is a **Vite + React + TypeScript + Tailwind CSS** single-page application (EliteFix Boutique — luxury home remodeling landing page).

### Quick reference

| Task | Command |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves at `http://localhost:5173`) |
| Lint | `npm run lint` |
| Type check | `npm run typecheck` |
| Build | `npm run build` |

### Non-obvious notes

- **Lint / typecheck has a known pre-existing warning**: `src/components/Footer.tsx` imports `Twitter` from `lucide-react` but never uses it. This causes both `npm run lint` (exit 1) and `npm run typecheck` (exit 2) to fail. This is an existing codebase issue — do not treat it as a blocker.
- **Supabase is optional**: The app reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from a `.env` file. Without these, the quote-request form gracefully errors with a user-facing message. The rest of the site works fine without Supabase.
- **GitHub Pages base path**: `vite.config.ts` sets `base` to `/${repoName}/` only when `GITHUB_ACTIONS` env var is set. Locally the base is `/`.
- **No test framework**: There are no automated test suites (no Jest, Vitest, etc.) configured. Manual browser testing is the primary verification method.
- **Node version**: The CI workflow uses Node 20. The app works with Node 20+.
