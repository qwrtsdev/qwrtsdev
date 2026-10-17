# Design tokens & guidelines

Source: Figma `qwrts.dev` → page **Reference** → frame **www.varkaria.works** (node `4:135`).
Tokens live in `src/styles/global.css` (`@theme`), so every value below is a Tailwind utility.

## Tokens

| Token | Value | Utility | Use |
|---|---|---|---|
| `--color-page` | `#fafafa` | `bg-page` | Page background |
| `--color-surface` | `#ffffff` | `bg-surface` | Card fill |
| `--color-border` | `#f3f3f3` | `border-border` | Card hairline (1px solid) |
| `--color-rule` | `#f1f1f1` | `border-rule` | Dashed dividers and container rails |
| `--color-ink` | `#4e4e4e` | `text-ink` | Emphasis: headings, lead phrase, links |
| `--color-muted` | `#9b9b9b` | `text-muted` | Body text, meta, dates (default) |
| `--font-sans` | Geist 400 / 500 | `font-sans` | Only typeface |
| `--radius-card` | `8px` | `rounded-card` | Cards |
| `--radius-media` | `6px` | `rounded-media` | Images, list-row hover |
| `--container-page` | `720px` | `max-w-page` | Rail-to-rail width |
| `--container-content` | `688px` | `max-w-content` | Content column (16px inset from rails) |

Type scale is a single step: **14px / 20px** (`text-sm`). Hierarchy comes from weight and color, never size.

## Layout

- One centered column, `688px` wide, inside a `720px` container marked by **2px dashed vertical rails** (`border-rule`) running full height.
- Sections stack with a **10px gap** (`gap-2.5`) and are separated by **full-bleed 1px dashed rules** (`.rule`) that cross the rails.
- Order in the reference: status bar → intro card → image + experience grid (6 cols, 12px gap, 2/4 split) → hobbies card → "Go to blog" button card → footer row.
- Top/bottom bars are single rows: `justify-between`, muted 14px text, 16–18px monochrome icons spaced 8px.

## Components

- **Card** (`.card`): `bg-surface`, 1px `border-border`, `rounded-card`, padding `16px 20px`. No shadow. Paragraph spacing inside: 24px.
- **List row**: padding `8px 12px`, `rounded-media`; title in `text-ink font-medium`, subtitle and trailing date in `text-muted`.
- **Button card**: a card with `8px` padding, centered muted text, key word in `font-medium`.
- **Inline link**: `text-ink font-medium underline`, 1px decoration.

## Rules

1. Muted by default; promote only the lead phrase or a name to `text-ink font-medium`.
2. No shadows, no gradients, no accent color. Depth comes from white-on-`#fafafa` and hairline borders.
3. Dividers are always dashed; card borders are always solid.
4. Keep everything inside the 688px column; only rules and rails go full-bleed.
5. Mobile: column shrinks with a 16px side gutter (`px-4`), rails stay at the viewport edges.
