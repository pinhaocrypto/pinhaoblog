---
version: alpha
name: The Quiet Pensieve
description: A restrained editorial archive for thoughts at different stages of maturity.
colors:
  ink: "#131313"
  paper: "#FFFFFF"
  muted-ink: "#5A5A5A"
  rule: "#DDDDDD"
  quiet-surface: "#F5F5F5"
  night-ink: "#E0E0E0"
  night-paper: "#121212"
  night-muted: "#B5B5B5"
  night-rule: "#444444"
  focus: "#2A7FB8"
typography:
  opening:
    fontFamily: EB Garamond
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: EB Garamond
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: EB Garamond
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.45
  entry-title:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
  subheading:
    fontFamily: EB Garamond
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.3
  label:
    fontFamily: League Spartan
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.1em
  metadata:
    fontFamily: League Spartan
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.04em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
rounded:
  none: 0px
  subtle: 5px
  full: 9999px
---

# The Quiet Pensieve

## Overview

The Creative North Star is **The Quiet Pensieve**: a personal editorial archive where ideas appear at different depths and levels of maturity. The interface should resemble a well-kept but actively used notebook, not a finished publication or a branded campaign.

Reading comes first. Use a narrow content column around 720–760px, generous vertical intervals, simple rules, and open space. Hierarchy should come from typography, rhythm, chronology, and relationships between entries rather than containers or promotional sections.

The site is a brand surface, but expression must remain quiet. Distinctiveness comes from the Pensieve vocabulary, bilingual voice, editorial type, personal images, dates, visible revisions, and recurring questions. Avoid making every page visually dramatic.

Motion is sparse and functional: 150–250ms ease-out transitions for navigation, theme changes, and state feedback. Always respect reduced-motion preferences. Never animate merely to make the site feel magical.

## Colors

The palette is ink on paper in light mode and soft ink on near-black paper in dark mode.

- **Ink (`#131313`):** primary text and headings. It is softer than pure black.
- **Paper (`#FFFFFF`):** the light reading surface.
- **Muted Ink (`#5A5A5A`):** dates, descriptions, and secondary orientation.
- **Rule (`#DDDDDD`):** quiet separators between accumulated material.
- **Quiet Surface (`#F5F5F5`):** code, tables, and rare grouped utility areas, not generic cards.
- **Night Paper (`#121212`) / Night Ink (`#E0E0E0`):** dark-mode reading pair.
- **Focus (`#2A7FB8`):** accessible keyboard focus and rare interactive emphasis, not a decorative brand wash.

Keep the site predominantly neutral. Personal images may introduce color. Do not create a rainbow of category colors for Note, Essay, Question, and Memory; their differences are semantic, not decorative.

## Typography

Typography carries the identity.

- **Narrative and entry titles:** EB Garamond with Traditional Chinese serif fallbacks. Use regular weight, generous leading, and readable 45–75 character line lengths.
- **Navigation, section labels, and metadata:** League Spartan with system sans-serif fallbacks.
- **Chinese text:** allow the browser to fall through to Noto Serif TC, PingFang TC, or Microsoft JhengHei as currently configured. Do not force all bilingual content into a single generic sans-serif.
- **Page identity:** Bio, Work, and Pensieve use small orientation markers rather than display-sized titles.
- **Article titles:** may be visually prominent, but should remain editorial rather than promotional.

Use sentence case for prose. Uppercase is reserved for short navigational labels and metadata. Never use oversized italic-serif hero copy, extreme tracking, or more than the existing two font families.

## Elevation

The system is flat. Depth comes from chronology, white space, typographic contrast, borders, and the light/dark image pair.

Do not use box shadows for ordinary content. Hover and focus states may change opacity, underline weight, or border color. A shadow is permitted only when a future element genuinely floats above the document, such as a dialog.

## Components

- **Site navigation:** a quiet horizontal list around the MNIPH wordmark. On mobile it becomes a keyboard-accessible disclosure menu. Pensieve replaces Blog as the canonical writing destination.
- **Home opening:** a modest greeting and one explanatory sentence. Never expand it back into a professional slogan, résumé summary, or CTA row.
- **Home sections:** recent writing, Now, and recurring questions are separated by thin rules and spacing rather than cards.
- **Page marker:** a small text label such as `Bio` or `Work`; it orients without competing with content or implying a required sequence.
- **Pensieve index:** chronological groups with entry title, date, kind, topics, optional updated date, and description. Entry titles are the dominant element.
- **Thought metadata:** compact sans-serif labels. They should read like archival notation, not colorful badges.
- **Article body:** a narrow long-form column with clear headings, comfortable lists, code treatment, and full-width images only when the material benefits.
- **Links:** use visible underlines or another unambiguous text treatment. Keep hover changes restrained and preserve keyboard focus rings.
- **Images:** use the Seoul light/dark pair as atmosphere, not as a marketing hero. Personal images should retain their documentary quality.

## Do's and Don'ts

### Do

- Do make it easy to start reading from any page.
- Do preserve dates, concrete revision history, unresolved questions, and signs of change.
- Do allow technical work, personal reflection, music, tennis, travel, and relationships to coexist.
- Do use generous whitespace and thin rules to create rhythm.
- Do keep text comfortably readable on mobile and desktop.
- Do make intentional exceptions explicit rather than silently normalizing the entire system.
- Do preserve the user's candid bilingual voice when editing copy.

### Don't

- Don't optimize the site for hiring conversion, lead generation, or contact clicks.
- Don't restore a large professional hero or aggressive call to action.
- Don't wrap entries and sections in generic rounded cards.
- Don't add gradients, glass effects, cyberpunk glows, or decorative tech imagery.
- Don't turn Pensieve kinds into loud category colors or icon tiles.
- Don't remove personal or unfinished material merely because it does not support one career narrative.
- Don't use animation as decoration or simulate a literal magical basin.
- Don't make the system so polished that unfinished entries feel out of place.
