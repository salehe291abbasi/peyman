# Current state — 2026-11-19

## Source and scope

Application and Git root: C:\salehe abbasi\projects\peyman\web. Branch main; origin https://github.com/salehe291abbasi/peyman.git. Project source of truth is docs/. Frontend only; backend belongs to another developer. User accepted the landing and authorized commit/push on 2026-11-19, followed by stepwise panel design. Landing commit/push is being prepared; no deployment requested.

## Implemented

Light is the default, independent of OS preference. White/light-gray surfaces, navy text, violet actions and restrained gold accents cover the landing and all sample panels. The saved light/dark choice uses localStorage key peyman-theme; layout validates and applies a saved dark choice before paint. Switching still works in-page when storage is unavailable and announces the persistence limitation.

Header is compact with an icon-only sun/moon switch, short hover/keyboard hint, quiet navigation and ورود. The new native login dialog explicitly says account login is unavailable and offers four role-specific sample previews without collecting personal information. Escape restores trigger focus; choosing a role focuses its preview. Footer now combines an invitation band, shared brand, navigation, audience-specific links, preview card and demo-status line. The hero composition approved in the user's screenshot is preserved in the header/footer refinement. Text sizes and selected-state clarity were improved in the preceding light-theme pass. RTL, local font and reduced-motion rules remain; no dependencies added.

Changed source: src/app/globals.css, src/app/layout.tsx, src/components/landing.tsx, theme-toggle.tsx, login-entry.tsx, landing-footer.tsx and src/lib/content.ts. Docs and QA screenshots updated. Existing broad stylesheet remains a maintenance watchpoint; unrelated legacy sections were not refactored.

## Reference review

Reviewed current project docs, parent documentation pointer, sample structure and available proposal extracts. The old technical PDF text extraction is partially corrupted; this was not a full new PDF audit. User-requested design review: [Shaayegh](https://shaayegh.ir/) header/footer visually (continuous invitation/footer and grouped links), [Linear](https://linear.app/) header/footer visually (compact navigation, restrained hierarchy), [shadcn/ui](https://ui.shadcn.com/) DOM and theme-toggle interaction (single icon control). Vercel text loaded through web lookup, but its browser visit timed out; no visual conclusions drawn. No assets, commercial claims or branding copied.

## Actual verification

- Final npm run typecheck and npm run build passed after header/footer changes. git diff --check passed; affected source and Git diff reviewed. An earlier light-theme build encountered a transient Windows EPERM in generated output; unchanged retry succeeded. Generated next-env.d.ts build-only paths restored.
- Browser: initial light mode, dark switching by click/Space, persistence after reload, matching aria-checked state, return to light, parent CTA to consent preview, footer organization link selecting its role, mobile menu open/Escape, lifecycle stage 10 and FAQ disclosure passed.
- Login dialog: desktop/mobile layout, close button, Escape/focus return, parent preview navigation, selected sample tab and focus transfer passed. Browser captured no errors/warnings.
- No horizontal overflow at viewport/document widths 1280/1270, 820/810, 390/380 and 320/310. Light desktop/mobile and dark desktop/mobile inspected across this work; final footer inspected in both themes and mobile. Fixed inherited white hero title, pale nav links and a nav-hover styling collision during QA.
- Current screenshots: docs/screenshots/light-desktop.jpg, light-mobile.jpg, footer-light.jpg, footer-dark.jpg, footer-mobile.jpg. theme-dark-desktop.jpg records the earlier theme pass before the final header. Viewport override reset; local preview tab retained. Existing dev server at http://127.0.0.1:3000 reused and left running.
- No physical-device, exhaustive accessibility or performance audit. Storage-denied behavior and OS reduced-motion were not browser-tested; error handling and existing reduced-motion CSS retained.

## Remaining work and exact next task

Next: commit/push the accepted landing, document numbered panel milestones, and implement only the first fixture-backed panel foundation for review. No active implementation blocker. Representative-user testing, full accessibility/performance checks and real-device QA remain planned. Real login, operational panels, backend/API/auth and launch decisions remain TBD.
