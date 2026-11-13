# Asset provenance

## Original conceptual hero

Historical asset: retained on disk, no longer displayed in the redesigned landing. The current hero is a code-rendered product preview.

- Local file: `public/images/hero.webp`
- Created with the built-in ImageGen tool; not a photograph of actual customers.
- The generated PNG remains at its original location. The project uses an optimized WebP copy.
- On-page copy explicitly identifies the image as conceptual.

Final prompt:

> Use case: photorealistic-natural. Asset type: original conceptual hero photograph for Peyman, a premium Persian school educational trips platform. Create a beautifully art-directed documentary-style photograph of a small group of 5 Iranian schoolboys age 10-12 wearing contemporary modest school field-trip clothing and muted teal, ochre and sage backpacks, accompanied by an adult male teacher, walking away from the camera along a wide safe botanical garden path. They are curious, one child looking at leaves with the teacher. Lush tall deciduous trees, early autumn touches, distant Alborz foothills subtly visible through foliage. No identifiable real persons. Beautiful tactile natural photography, warm morning sunshine filtered through leaves, rich forest greens and warm ivory highlights, filmic yet realistic, optimistic and calm. Wide landscape 3:2 composition, subjects in the lower middle third, enough lush botanical context above and sides. Children are supervised on a safe flat path. Not wilderness trekking. Editorial education magazine photography. No lettering, signage, logo, watermark, UI or graphics. Avoid artificial plastic skin and oversaturated colors. This image represents an illustrative fictional school trip, not actual customers.

## Editorial experience images

These are topic illustrations, not actual inventory or pictures of verified suppliers.

- `nature.webp`: https://images.unsplash.com/photo-1441974231531-c6227db76b6e
- `science.webp`: https://images.unsplash.com/photo-1462331940025-496dfbfc7564
- `culture.webp`: https://unsplash.com/photos/a-blue-and-yellow-building-with-a-large-archway-usmDTDGqvlw — Sina Bahar, Iranian architecture in Isfahan. Image: https://images.unsplash.com/photo-1682312819531-a066ac454b48

Images are stored locally and served through Next Image. No visitor request is sent to Unsplash at runtime.

## Font and icons

- Vazirmatn Variable, bundled through `@fontsource-variable/vazirmatn`.
- Lucide icons, bundled through `lucide-react`.
- The book/check mark is an original inline SVG concept, not a final registered brand identity.
