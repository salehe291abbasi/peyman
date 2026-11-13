# Current state — 2026-11-13

## Source and documentation

Application and Git root: `C:\salehe abbasi\projects\peyman\web`. Origin: https://github.com/salehe291abbasi/peyman.git; branch `main`. Run Git only from this directory. The remote root contains the contents of web; earlier parent-folder content remains in Git history. The latest landing implementation is ff2a98d, followed by documentation formatting in 6d2a5a7.

The five project docs now live in this tracked `docs/` directory with existing research and QA. `AGENTS.md` and `README.md` point here. The parent `docs/README.md` is only a relocation pointer. After every change, update this file with the current outcome, actual verification, remaining work/blockers and exact next task. Keep it a current handoff, not an accumulating activity log.

## Implemented

The landing has a short editorial hero, early four-role selection, role-specific preview navigation, five distinct sample panels, a three-step guided introduction, ten-step lifecycle, ivory trust section and grouped FAQs. Dark ink/violet/gold identity, Brand, local Vazirmatn and RTL are retained. Demo status is explicit. Copy and preview data live in `src/lib/content.ts`; landing styles remain in `src/app/globals.css`. Hero animation supports pause and reduced motion. No operational backend or Sites deployment.

## Verification

For this documentation relocation: checked the five files were moved without destination conflicts, reviewed doc paths and Git diff; no application code changed, so build/browser checks were not rerun.

Previous landing verification: `npm run typecheck`, `npm run build` and `git diff --check` passed. Browser desktop 1280/document1270 and mobile390/document380 had no horizontal overflow. Parent-role navigation, guided steps, RTL keyboard selection, mobile menu/Escape, lifecycle stage10 and FAQ disclosure worked. Screenshot: `docs/screenshots/role-led-desktop.jpg`. No physical-device, comprehensive accessibility or performance audit. Local preview was last available at http://127.0.0.1:3000; check availability before reuse.

## Remaining work and next task

Next: obtain user feedback on the current landing and apply concrete visual/UX refinements before operational panels. Representative-user testing and comprehensive accessibility/performance checks remain planned. Backend/API/auth/launch decisions remain TBD; another developer owns the backend. No active implementation blocker for landing refinements.
