# Todo

- [x] Research Dimensional Fund Advisors and define safe copy for the new entry
- [x] Add Dimensional above Asure across experience surfaces
- [x] Remove or update stale Summer 2026 opportunity messaging
- [x] Validate with typecheck, lint, and build

# Review

- Added a shared `data/experience.ts` source so the homepage, hero section, and `/experience` page all render Dimensional above Asure consistently.
- Kept the Dimensional description limited to confirmed facts after user correction: starting this summer in the Austin, TX office.
- `tsc --noEmit` and `eslint .` passed via local binaries because `bun` is not installed in this environment.
- `next build` failed for environment reasons unrelated to this change: Turbopack WASM is unsupported locally and the webpack fallback is missing the native `lightningcss` module.
