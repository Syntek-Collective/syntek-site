# SYNTEK visual direction

The original SYNTEK moodboards define the identity: off-white paper, black ink, a single ultramarine accent, its existing wordmark, pencil process artwork, and restrained editorial type. Astral informs navigation clarity, spacing, and access to actual software; its purple/lime identity and oversized centered hero are not used.

The homepage uses a higher-resolution restoration of the supplied process-study.jpeg and the existing SYNTEK logo. The artwork displays at a maximum of 340 CSS pixels, without cropping or enlargement transforms. Generated workshop imagery and staged tape effects are no longer rendered, and their unused assets (including the original process-study.jpeg) were removed from the repo; they remain in Git history. The pencil study was restored using the built-in ImageGen tool after the user reported that the small original looked blurry. The output is public/images/process-study-hires.png.

Project descriptions, links, team records, documentation, and keyboard disclosure behavior are retained. The homepage provides access to the existing software panels.

Neue Haas is first in the font stack with Helvetica Neue/Archivo fallbacks. IBM Plex Mono and Instrument Serif supply small annotations and occasional editorial contrast. No licensed Neue Haas font file is bundled.

Production build and ESLint pass. Final visual checks are recorded in the task conversation.

## Pencil restoration prompt

Edit the supplied SYNTEK pencil process drawing for higher-resolution website display. Restore clarity and resolution only. Preserve the entire original composition and the position, scale, number, and shape of its overlapping elliptical pencil forms, graphite shading, light construction grid, off-white paper, hand drawn pencil character, and all labels. Do not crop or zoom in. Leave a small quiet margin around ALL text and all orbital strokes so nothing is clipped. Labels must read exactly: '01 IDENTIFY', '02 SYNTHESIZE', '03 BUILD', '04 DEPLOY', '05 ITERATE', at the same positions as the source. Keep restrained uneven graphite strokes, translucent gray overlapping forms, no color accents, no new artwork, no heavy black outlines, no rendered objects, no tape or frames. This must look like the same original pencil sketch carefully rescanned at high resolution, not a new polished scientific infographic. Output at least 1536 by 1536 pixels, square composition, complete drawing visible.

## Composition refinement

The study now blends into the paper rather than appearing as a rectangular image card. Its full composition remains visible at the previous maximum size. Section dividers are reduced, with spacing and type carrying the hierarchy. Project fronts include the first sentence of their existing description, or the existing documentation placeholder when no description exists. The underlying descriptions and destinations are unchanged.

A restrained pointer response moves the study by at most four pixels per axis, on mouse input only. Reduced-motion users get a static drawing. Project hover feedback is also suppressed by the reduced-motion stylesheet.

Verified at 1440px, 390px, and 320px widths: no horizontal overflow; front-panel summaries fit; project disclosure and Escape/focus return preserved.

## Accent, icon, and motion

The brand board (LinkedIn profile options: 01 Primary through 09 Tokyo) is monochrome. Red was removed from the site. A single ultramarine, `--accent` / `--blue` (#26429a), is the only accent color: primary button, the OSP stamp, nav hover and active state, link hovers, eyebrow labels, focus rings, and selection. Blue echoes the color fringe in the 07 / Glitch tile. The Lemonbeam project panel is a solid ultramarine field beside the black PennyWyze panel. The only red left is inside the PennyWyze product logo.

The four-circle mark beside "Start with the problem" is the 03 / Icon from the board: four solid ink circles, square and upright. Do not recolor or rotate it.

Motion is limited to two moments, both disabled under `prefers-reduced-motion`:

- The SYNTEK wordmark glitches once (under a second) shortly after load and again on hover: horizontal jitter, slices, and a blue fringe.
- The four-circle icon builds in, one circle at a time, the first time it scrolls into view (`src/components/MissionMark.jsx`).

Avoid generic fade-up-on-scroll effects for sections.

## Copy

Copy is short and declarative, drawing on the board's phrases: "Ideas into useful things." (process study caption), "People, problems, systems, solutions." (homepage), and "より良い仕組みをつくる", loosely "Better systems, one tool at a time." (Collective page). Product pitches belong on the product cards, not in brand copy. Engineers are described as spread across the world; do not name specific cities.

Open item: the Collective page's "Our focus" paragraph is still the earlier wording and may need a rewrite to match.
