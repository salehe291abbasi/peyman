# Architecture

## Source layout

The application and Git root is `web/` in the local workspace. Paths below are relative to that root.

```text
AGENTS.md                 Working rules and session handoff requirements
README.md                 Run instructions and documentation entry points
docs/                     Current state, roadmap, overview, architecture, decisions
                          Specialized research, asset provenance, QA and screenshots
src/app/                  Page, layout, metadata, icon and global CSS
src/components/           Landing, demo previews and shared brand
src/lib/                  Typed editorial/demo data and grouped FAQs
public/                   Local illustrative assets
```

## Rendering and responsibilities

- Next.js App Router prerenders the page; `src/app/page.tsx` renders the client `Landing` component. Layout supplies Persian RTL, local font, metadata and global CSS.
- `landing.tsx` manages role, preview, guide, FAQ and mobile-navigation state. Role CTAs select a matching sample panel and navigate to the preview section.
- `content.ts` supplies current landing copy, roles and distinct preview records. `faq-content.ts` supplies grouped questions. Older editorial records and `reference-content.ts` are retained; they do not describe the current page structure.
- `landing-demos.tsx` supplies HeroRoute, Lifecycle and PanelPreview. HeroRoute synchronizes marker/status using requestAnimationFrame, with cleanup, visibility handling, pause and reduced-motion support.
- `product-preview.tsx` retains the shared RTL keyboard tab helper and earlier sample preview component. The current landing does not render the earlier dialog/filter experience.
- `brand.tsx` owns shared identity; `globals.css` owns tokens, responsive styling and reduced-motion rules. Current landing styles are scoped under `.peyman-landing` and `pl-*` classes.
- Native `details` provides FAQ disclosure. Sample data and state stay local; no operational API or persistent storage is used.

## Boundaries

Frontend only. No real authentication, reservation, consent submission, payments or notifications. Backend contracts, permission enforcement and auth/session strategy remain TBD with the backend developer. Sample state cannot serve as authoritative business data.

The broad client landing boundary and large global stylesheet remain maintenance watchpoints. Extract focused sections only when feature work justifies it. Launch domain, canonical, sitemap, social preview and indexing policy require decisions; `noindex` is intentional for the current preview.
