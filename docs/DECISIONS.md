# Significant decisions

| Decision | Reason / relevant alternative | Status |
| --- | --- | --- |
| Use Next.js App Router with React and strict TypeScript. | Public content benefits from HTML prerendering and metadata support; React/Vite was the earlier alternative. User explicitly selected Next.js. | Adopted; implemented. |
| Keep this project frontend-only; another developer builds backend. | User-defined responsibility boundary. Real permissions, reservations and consent records require server support. | Confirmed; API/auth contracts TBD. |
| Use local typed content and React state for the landing demo. | Demonstrates UX before API availability without unnecessary state/data libraries. Examples remain labeled and non-transactional. | Adopted for preview; not an operational data design. |
| Brand Peyman as a school companion, starting with trips. | Accommodates later food, supplies and transport services. User rejected forest/cream/lime. Ink navy/blue/white product-first redesign is implemented; see `web/docs/redesign-research.fa.md`. | Redesigned proposal; user acceptance pending. |
| Keep preview non-indexable and do not fabricate domain URLs. | Domain and launch approval are absent. Next metadata exists, but launch SEO is not finalized. | Adopted for preview; revisit at launch. |
| Maintain five concise project docs at root; retain existing specialized research/QA in `web/docs`. | Fast session handoff without duplicating or deleting existing artifacts. | Adopted by user-requested setup. |

No backend framework, hosting provider, auth mechanism or final financial model is approved by this frontend audit.


User directed revision: use the supplied Downloads HTML hero and local source-sample body. Current palette is ink/violet/gold. Previous blue redesign was rejected; current user acceptance pending.
