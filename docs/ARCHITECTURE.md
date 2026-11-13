# Architecture

## Current shape

One Next.js application in `web/`. `src/app/page.tsx` is a Server Component entry rendering the client `Landing` component. Layout owns Persian RTL, locally bundled font, metadata and CSS. Next prerenders the initial HTML; React hydrates interactions in the browser.

```text
peyman/
  AGENTS.md                 Permanent working rules
  docs/                     Overview, architecture, roadmap, handoff, decisions
  web/
    src/app/                Entry, layout, metadata, icon, global CSS
    src/components/         Landing interactions and shared brand
    src/lib/content.ts      Typed static editorial/demo data
    public/images/          Local illustrative images
    docs/                   Existing research, asset provenance, QA, screenshots
  source sample/            Reference demo; not the production application
  *.pdf                     Product/reference documents
  tmp/                      Document-analysis intermediates
```

## Responsibilities and flow

- `content.ts` supplies experience records, workflow checklists, audience-specific copy, safeguards and FAQs.
- `landing.tsx` imports this content, holds local React state and renders the landing. Filters select experiences; tabs select audiences; a discriminated modal state chooses details or guided demo.
- `product-preview.tsx` owns reusable sample workflow tabs/checklists in the hero and demo. CSS and IntersectionObserver provide restrained motion; no animation dependency.
- Native `dialog` handles modal presentation; effects manage opening and page scroll, with explicit close/focus restoration. Native `details` provides FAQ disclosure.
- `brand.tsx` provides the reusable conceptual brand mark. `globals.css` supplies visual tokens, component styles, breakpoints and reduced-motion behavior.
- Images use Next Image with local assets. No application API calls or persistent client storage were found in `web/src` during the audit.

## Boundaries and extension

No backend, database, API routes, global state store or implemented dashboard exists. Backend contracts and auth/session strategy are TBD. Agree these before integrating real data; do not turn illustrative client state into authoritative reservation or permission logic.

The landing currently forms a broad client boundary. The landing component and global stylesheet remain maintenance watchpoints; the reusable workflow preview is now extracted. Extract focused sections only when real feature work justifies it; retain prerendered public content and separate future private data.

Domain/canonical, sitemap, social image and indexing policy require launch configuration. The existing `noindex` setting is intentional for preview.


Current reference revision supersedes prior interaction details: landing uses typed reference-content.ts and faq-content.ts, six role tabs, screenshot tabs and grouped FAQ. Previous product-preview.tsx and content.ts are retained but unused. Current CTAs scroll to reference screenshots; no guided dialog is rendered.

Dark revision uses landing-demos.tsx for synchronized HeroRoute animation, Lifecycle selection and code-rendered PanelPreview; screenshot assets retained but unused. Animation cleanup cancels RAF, handles visibility and reduced motion.
