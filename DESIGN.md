---
version: alpha
name: The Quiet Pensieve
description: A restrained editorial archive for thoughts at different stages of maturity.
colors:
  ink: "#131313"
  paper: "#FFFEFA"
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
    fontFamily: Avenir Next
    fontSize: 23px
    fontWeight: 650
    lineHeight: 1.3
  body:
    fontFamily: Avenir Next
    fontSize: 16.5px
    fontWeight: 400
    lineHeight: 1.72
  lead:
    fontFamily: Avenir Next
    fontSize: 18.5px
    fontWeight: 600
    lineHeight: 1.35
  entry-title:
    fontFamily: Avenir Next
    fontSize: 22px
    fontWeight: 650
    lineHeight: 1.3
  subheading:
    fontFamily: Avenir Next
    fontSize: 20px
    fontWeight: 650
    lineHeight: 1.35
  label:
    fontFamily: Avenir Next
    fontSize: 15px
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: 0
  metadata:
    fontFamily: Avenir Next
    fontSize: 11.5px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
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

The Creative North Star is **The Quiet Pensieve**: a personal reading archive where ideas appear at different depths and levels of maturity. The interface should resemble a well-kept but actively used notebook, not a finished publication or a branded campaign.

Reading comes first. Use a narrow content column around 680px, generous vertical intervals, very few rules, and open space. Hierarchy should come from weight, rhythm, chronology, and relationships between entries rather than containers, large type, or promotional sections.

The site is a brand surface, but expression must remain quiet. Distinctiveness comes from the Pensieve vocabulary, bilingual voice, editorial type, personal images, dates, visible revisions, and recurring questions. Avoid making every page visually dramatic.

Motion is sparse and functional: 150–250ms ease-out transitions for navigation, theme changes, and state feedback. Always respect reduced-motion preferences. Never animate merely to make the site feel magical.

## Colors

The palette is ink on paper in light mode and soft ink on near-black paper in dark mode.

- **Ink (`#131313`):** primary text and headings. It is softer than pure black.
- **Paper (`#FFFEFA`):** an almost-white reading surface with only enough warmth to soften the page.
- **Muted Ink (`#5A5A5A`):** dates, descriptions, and secondary orientation.
- **Rule (`#DDDDDD`):** quiet separators between accumulated material.
- **Quiet Surface (`#F5F5F5`):** code, tables, and rare grouped utility areas, not generic cards.
- **Night Paper (`#121212`) / Night Ink (`#E0E0E0`):** dark-mode reading pair.
- **Focus (`#2A7FB8`):** accessible keyboard focus and rare interactive emphasis, not a decorative brand wash.

Keep the site predominantly neutral. Personal images may introduce color. Do not create a rainbow of category colors for Note, Essay, Question, and Memory; their differences are semantic, not decorative.

Light mode is the default for a first visit. Dark mode is an explicit reader preference and remains selected once chosen; do not infer it from the operating-system theme.

## Typography

Typography should disappear into the reading experience.

- **Primary reading face:** Avenir Next with Helvetica Neue, Noto Sans TC, PingFang TC, Microsoft JhengHei, and system sans-serif fallbacks. Using one family across navigation and prose is intentional: the hierarchy comes from weight and spacing, not a decorative font pairing.
- **EB Garamond:** retained as an available accent for a future piece that genuinely benefits from a literary voice, but it is not the default interface or prose face.
- **Chinese text:** use the sans-serif Traditional Chinese fallback stack so bilingual paragraphs keep the same visual texture.
- **Page identity:** Bio, Work, and Pensieve use small orientation markers rather than display-sized titles.
- **Article titles:** stay close to body scale—roughly 20–22px—and use weight rather than size for emphasis.

Use sentence case for prose and section labels. Uppercase is reserved for the MNIPH wordmark. Never use oversized hero copy, extreme tracking, or ornamental type merely to signal that the site contains writing.

## Elevation

The system is flat. Depth comes from chronology, white space, typographic contrast, borders, and the light/dark image pair.

Do not use box shadows for ordinary content. Hover and focus states may change opacity, underline weight, or border color. A shadow is permitted only when a future element genuinely floats above the document, such as a dialog.

## Components

- **Site navigation:** a quiet horizontal list around the MNIPH wordmark. On mobile it becomes a keyboard-accessible disclosure menu. Pensieve replaces Blog as the canonical writing destination.
- **Home opening:** a modest greeting and one explanatory sentence. Never expand it back into a professional slogan, résumé summary, or CTA row.
- **Home sections:** recent writing, Now, and recurring questions are separated by generous spacing rather than cards or repeated rules.
- **Page marker:** a small text label such as `Bio` or `Work`; it orients without competing with content or implying a required sequence.
- **Pensieve index:** the newest entry opens directly into its full text. Earlier entries return to a compact chronological index with title, date, kind, topics, optional updated date, and description.
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
