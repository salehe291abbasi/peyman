# Roadmap

Status: **planned** = not started; **in progress** = active work; **implemented** = present but not fully verified; **verified** = supported by recorded checks. No application implementation task is currently in progress.

## 1. Landing foundation

- [x] **Verified** — Next.js/TypeScript frontend and local assets; prior production build and browser QA recorded in `docs/verification.md`.
- [x] **Verified** — Current role selection, role-specific preview navigation, guide, mobile menu/Escape, lifecycle stage10 and FAQ disclosure; focused browser checks recorded in CURRENT_STATE.md. Earlier experience filtering/details are historical.
- [x] **Verified** — Fixed-width desktop/mobile layout inspection; this is not physical-device or comprehensive accessibility certification.
- [x] **Verified** — Project instructions and five-document handoff system moved into tracked source docs/; paths and Git diff checked. CURRENT_STATE.md must be updated after every change.

## 2. Validate and finalize landing — next milestone

- [x] **Verified** — Ink/violet/gold role-led landing implemented with focused desktop/mobile browser checks, TypeScript and production build. See `docs/verification.md`; user acceptance remains pending.
- [ ] **Planned** — Obtain user feedback on the redesigned desktop/mobile landing and refine approved issues.
- [ ] **Planned** — Test key tasks with representative school staff; collect terminology and comprehension findings.
- [ ] **Planned** — Resolve observed UX issues; verify changed behavior and layout.
- [ ] **Planned** — Measure accessibility and performance; inspect on real phones. Choose additional tooling only if needed.

## 3. Operational frontend — after scope and API agreement

- [ ] **Planned** — Agree MVP screens, role/scope matrix and permitted trip transitions with product owner and backend developer.
- [ ] **Planned** — Define OpenAPI/error/pagination/upload contracts and auth/session behavior; backend availability TBD.
- [ ] **Planned** — Build shared panel shell and identity/membership UI using agreed fixtures, then real APIs.
- [ ] **Planned** — Deliver vertical slices: supplier/documents → trip request/review → capacity/services → participants/consents → departure/return/reporting.
- [ ] **Planned** — Add meaningful automated coverage for critical user journeys and permission-facing behavior; conduct integration acceptance with the backend.

## 4. Public launch — after approval and verification

- [ ] **Planned** — Confirm domain, hosting, approved claims/assets, canonical, sitemap, social preview and indexing policy.
- [ ] **Planned** — Run release checks and obtain explicit deployment authorization.

## 5. Future product expansion — priority/details TBD

- [ ] **Planned** — Canteen menus and food reservations.
- [ ] **Planned** — Supplies, stationery and reward purchases.
- [ ] **Planned** — Reviewed school transport discovery by city/province.
- [ ] **Planned** — Finance/settlement and digital learning records only after product/policy decisions and API support.

Future-service cards on the landing do not count as implementation of these services.
