# SYNTEK visual direction

The original SYNTEK moodboards define the identity: off-white paper, black ink, rust details, its existing wordmark, pencil process artwork, and restrained editorial type. Astral informs navigation clarity, spacing, and access to actual software; its purple/lime identity and oversized centered hero are not used.

The homepage uses a higher-resolution restoration of the supplied process-study.jpeg and the existing SYNTEK logo. The original is retained. The artwork displays at a maximum of 340 CSS pixels, without cropping or enlargement transforms. Generated workshop imagery and staged tape effects are no longer rendered. The previous assets remain on disk. The pencil study was restored using the built-in ImageGen tool after the user reported that the small original looked blurry. The output is public/images/process-study-hires.png.

Project descriptions, links, team records, documentation, and keyboard disclosure behavior are retained. The homepage provides access to the existing software panels.

Neue Haas is first in the font stack with Helvetica Neue/Archivo fallbacks. IBM Plex Mono and Instrument Serif supply small annotations and occasional editorial contrast. No licensed Neue Haas font file is bundled.

Production build and ESLint pass. Final visual checks are recorded in the task conversation.

## Pencil restoration prompt

Edit the supplied SYNTEK pencil process drawing for higher-resolution website display. Restore clarity and resolution only. Preserve the entire original composition and the position, scale, number, and shape of its overlapping elliptical pencil forms, graphite shading, light construction grid, off-white paper, hand drawn pencil character, and all labels. Do not crop or zoom in. Leave a small quiet margin around ALL text and all orbital strokes so nothing is clipped. Labels must read exactly: '01 IDENTIFY', '02 SYNTHESIZE', '03 BUILD', '04 DEPLOY', '05 ITERATE', at the same positions as the source. Keep restrained uneven graphite strokes, translucent gray overlapping forms, no color accents, no new artwork, no heavy black outlines, no rendered objects, no tape or frames. This must look like the same original pencil sketch carefully rescanned at high resolution, not a new polished scientific infographic. Output at least 1536 by 1536 pixels, square composition, complete drawing visible.

## Composition refinement

The study now blends into the paper rather than appearing as a rectangular image card. Its full composition remains visible at the previous maximum size. Section dividers are reduced, with spacing and type carrying the hierarchy. Project fronts include the first sentence of their existing description, or the existing documentation placeholder when no description exists. The underlying descriptions and destinations are unchanged.

A restrained pointer response moves the study by at most four pixels per axis, on mouse input only. Reduced-motion users get a static drawing. Project hover feedback is also suppressed by the reduced-motion stylesheet.

Verified at 1440px, 390px, and 320px widths: no horizontal overflow; front-panel summaries fit; project disclosure and Escape/focus return preserved.
