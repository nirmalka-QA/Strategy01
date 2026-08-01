# Polaira — Strategy

React + TypeScript frontend scaffold for the Polaira Strategy application.

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | React | 19.2.8 |
| Language | TypeScript | 6.0.3 |
| Build tool | Vite | 8.2.0 |
| UI library | Mantine | 9.5.0 |
| State management | Redux Toolkit | 2.12.0 |
| Package manager | npm | — |

## Project Structure

```
src/
├── components/
│   └── layout/         # AppShell and shared layout primitives
├── features/
│   └── counter/        # Example Redux slice — replace with domain features
├── hooks/
│   ├── useAppDispatch.ts   # Type-safe dispatch hook
│   └── useAppSelector.ts   # Type-safe selector hook
├── pages/
│   └── Home.tsx        # Route-level page components go here
├── store/
│   ├── index.ts        # Store setup and exported types
│   └── rootReducer.ts  # Combined reducer — wire new slices here
├── types/
│   └── index.ts        # Global shared types
├── theme.ts            # Mantine theme configuration
├── App.tsx
└── main.tsx
```

## Scripts

```bash
npm run dev          # Start Vite dev server (HMR)
npm run build        # Type-check + production build → dist/
npm run preview      # Serve the production build locally
npm run lint         # ESLint (flat config)
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier write
npm run format:check # Prettier check (for CI)
npm run type-check   # tsc --noEmit only (no build artefacts)
```

## Adding a Feature

1. Create a slice in `src/features/<name>/<name>Slice.ts`
2. Export the reducer from `src/features/<name>/index.ts`
3. Wire the reducer into `src/store/rootReducer.ts`
4. Add page components in `src/pages/` and import them in `App.tsx`

## Dependency Audit

`npm audit` was run at scaffold time. Result: **0 vulnerabilities**.

One high-severity vulnerability was found in the initial `postcss@8.5.6` pin
(CVE: GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-r28c-9q8g-f849).
It was remediated by upgrading to `postcss@8.5.25` before the first commit.

## TypeScript Note

TypeScript 7 (`7.0.2`) was the latest `npm` tag at scaffold time, but
`typescript-eslint@8.65.0` constrains its peer to `>=4.8.4 <6.1.0`.
TypeScript `6.0.3` is pinned as the highest compatible stable release.
Upgrade TypeScript and `typescript-eslint` together once upstream support lands.
