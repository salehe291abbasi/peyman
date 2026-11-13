# Current landing verification — 2026-11-13

This section supersedes older visual checks below for the role-led redesign.

- Current checks: standalone TypeScript, production build and git diff --check passed.
- Browser desktop 1280px/document 1270px and mobile 390px/document 380px: no horizontal overflow.
- Parent role changed its panel; its CTA selected the parent preview. Preview contents differ by role.
- Guided steps changed the explanation and corresponding preview; RTL ArrowRight navigation selected the previous step.
- Mobile menu opened and closed with Escape. Stage 10 and FAQ disclosure worked.
- Hero preview is visible after removing an inherited opacity/transform conflict. Existing animation/pause logic is retained; reduced-motion styles remain in place.
- Evidence: screenshots/role-led-desktop.jpg.
- No physical-device, comprehensive accessibility or performance audit; demo only, no backend operations or Sites deployment.

---

# Historical verification (earlier landing)
# Verification

## Automated checks

- `npm run build`: production compilation, TypeScript validation, and static prerendering.
- `npm run typecheck`: standalone TypeScript check.
- Source formatted with the installed Prettier version.

## Browser checks performed

The page was served locally and inspected through the supported browser tool.

- Initial Persian content, one H1, RTL layout and local hero image rendered.
- Desktop frame: 1280px outer width, 1265px content width with the scrollbar; no horizontal overflow.
- Mobile frame: 390px outer width, 375px content width with the scrollbar; no horizontal overflow.
- Additional inspection in the in-app browser around 714px width.
- Science filter reduced experience cards to one; resetting the filter restored the full set.
- Experience details showed the matching description and activities with the non-bookable notice.
- Journey stage selection changed progress, stage text and checklist.
- Role selection changed the description and benefits.
- Keyboard ArrowLeft changed role and moved focus to the selected tab.
- Demo opened with focus on its close control; role selection and next-stage navigation worked.
- Escape closed the demo and returned focus to its initiating CTA.
- Mobile demo opened and advanced within its scrollable dialog.
- Compact navigation opened, followed its future-section anchor and closed.
- Loaded images had no broken entries in the inspected page.
- No browser console errors were recorded during the checked interactions.

The temporary responsive iframe fixture used for fixed-width inspection was removed from `public` after checking. Screenshots remain under `docs/screenshots`.

## Limits

This is a frontend preview, not an integrated product. No backend, authentication, permissions enforcement, reservations, payment or messaging was tested. No user interviews, conversion experiment, device lab, Lighthouse run, or comprehensive WCAG audit was performed. Mobile checks used a real fixed-width browser frame, not a physical phone.

Previews are intentionally noindex. Deployment-domain SEO, canonical URLs, sitemap, and final social preview must be configured before public launch.

## Redesign verification — 2026-11-13

The earlier sections above describe the previous green/cream version and are historical. Current design rationale: `redesign-research.fa.md`.

- Current TypeScript check and production build passed; formatted changed source with installed Prettier. No dependencies added.
- Desktop fixed iframe: 1366px outer / 1351px document; mobile: 390px outer / 375px document. No horizontal overflow at those inspected sizes. Browser viewport override did not resize the actual viewport, so fixed frames were used explicitly.
- Sample workflow tabs update checklist, status and next owner. Demo return stage displays reporting and handover details.
- Audience tabs update role-specific concerns; ArrowLeft selects the next RTL tab.
- Science filter returns one matching experience; reset restores the list. Details modal contains matching text and non-bookable notice.
- Escape closes modal and returns focus to the initiating CTA. Native FAQ disclosure expands.
- Mobile navigation opens; Escape from its links closes it. Mobile demo opens and its request stage works. Some iframe pointer actions failed at the browser-tool layer; those controls were successfully exercised with Enter. No claim of comprehensive touch-device testing.
- Entrance/reveal animations, tab transitions, hover feedback and reduced-motion CSS are implemented. Reduced-motion behavior has not been independently emulated in browser.
- New screenshots: `screenshots/redesign-desktop.jpg`, `screenshots/redesign-mobile.jpg`. Old screenshots remain historical.

No real backend, external submission, account creation, payment, live inventory or operational permissions were exercised. User acceptance, physical-device testing, performance measurement and complete accessibility audit remain pending.

Final cleanup: removed temporary responsive fixture. No console errors recorded during the final browser inspection. Mobile future-section navigation closed the menu correctly. Final source also fixes spacing where responsive headings hide line breaks.

Reference revision: hero from supplied Downloads HTML, body from source sample. Build and TypeScript passed. Desktop1366/document1356 and mobile390/document380 had no horizontal overflow. Six role tabs, ArrowLeft, FAQ category/disclosure, screenshot tabs and mobile menu/link closing checked. Initial SVG attribute warnings corrected. New screenshots: reference-desktop.jpg and reference-mobile.jpg. No physical-device/full accessibility audit.

Dark revision: build/typecheck passed; hero marker and status advance from the same clock, pause keeps marker unchanged between observations. Stage8 and mobile stage10 selection verified. Preview no longer renders raster screenshots; local font verified. Benefits heading static, positive measured separation from trust strip, centered solution numbers. Desktop1270 and mobile390/document380 no overflow. Reduced-motion support implemented, not separately browser-emulated.
