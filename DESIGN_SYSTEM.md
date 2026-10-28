# Element — Design System

> **You are reading the source of truth.** This document is written for both people and
> AI assistants. It is also served verbatim at **`/llms.txt`**, and the live, visual
> reference is **`/design-system`**. If you are an agent asked to build or change UI in
> this repository, read this file first — it is faster and more accurate than reading
> the page markup.

The system is a single Tailwind v4 `@theme`. There is no `tailwind.config.*`; every
token lives in `src/app/globals.css` and is consumed as a normal utility
(`bg-ink-850`, `text-display-lg`, `rounded-panel`, `ease-luxe`, `max-w-page`).

---

## 1. The five rules

1. **Dark only.** No light mode, no white sections. `color-scheme: dark` is set globally.
   Content sits on ink or on a `panel`; gold is the only accent.
2. **Gold is an accent, not a surface.** Gold belongs to small type, hairlines, icons,
   one primary action, and thin glows. Never fill a large area with gold, never use two
   competing accents.
3. **Use tokens, not literals.** No raw hex in components, no arbitrary font sizes or
   spacing for anything that already has a token. Add a token to `@theme` instead of
   inventing a value — that is the whole point of the file.
4. **Two voices.** Fraunces (`font-display`) for headlines and editorial numerals;
   Manrope (`font-sans`) for body, labels, navigation and UI. Never set the display face
   on body copy or the sans on a headline.
5. **Quiet motion.** Long durations, soft easing, small distances (6–28px). Motion
   clarifies hierarchy; it never performs. Everything collapses under
   `prefers-reduced-motion`.

---

## 2. Stack and file map

| Concern         | Where                                                        |
| --------------- | ------------------------------------------------------------ |
| Tokens, base, primitives, motion | `src/app/globals.css`                             |
| Fonts (`next/font`)              | `src/app/fonts.ts`                                |
| Root layout, metadata, theme     | `src/app/layout.tsx`                              |
| Showcase page                    | `src/app/design-system/page.tsx`                  |
| Temporary `/` → showcase         | `src/app/page.tsx`                                |
| Logo lockup / mark               | `src/components/logo.tsx`                         |
| Scroll reveal                    | `src/components/reveal.tsx`                       |
| Buttons                          | `src/components/ui/button.tsx`                    |
| Colour swatch (click to copy)    | `src/components/ui/swatch.tsx`                    |
| `cn()` class joiner              | `src/lib/cn.ts`                                   |
| This document / `/llms.txt`      | `DESIGN_SYSTEM.md`, `src/app/llms.txt/route.ts`   |

Stack: Next.js 16 (App Router, React 19), Tailwind CSS 4 via `@tailwindcss/turbopack`,
TypeScript, `pnpm`.

---

## 3. Colour

### Surfaces — `ink`

| Token        | Hex       | Utility examples        | Use                                   |
| ------------ | --------- | ----------------------- | ------------------------------------- |
| `ink-950`    | `#030303` | `bg-ink-950`            | Deepest wells, scrims, button text    |
| `ink-900`    | `#060608` | `bg-ink-900`            | Page background (`bg-background`)     |
| `ink-850`    | `#09090b` | `bg-ink-850`            | Panels (`panel`), cards               |
| `ink-800`    | `#0d0d10` | `bg-ink-800`            | Nested tiles inside a panel           |
| `ink-700`    | `#121216` | `bg-ink-700`            | Raised surface (`bg-surface-raised`)  |
| `ink-600`    | `#17171c` | `bg-ink-600`            | Hover on raised surface               |
| `ink-500`    | `#1e1e24` | `bg-ink-500`            | Controls, inputs                      |
| `ink-400`    | `#2a2a32` | `border-ink-400`        | Dividers, scrollbar thumb             |
| `ink-300`    | `#3b3b45` | `text-ink-300`          | Disabled glyphs                       |
| `ink-200`    | `#55555f` | `text-ink-200`          | Lowest-emphasis marks only            |

### Gold accent

`gold-50` `#fdf8ec` · `gold-100` `#f8edcf` · `gold-200` `#f0dca6` · `gold-300` `#e6c778` ·
`gold-400` `#d9b25c` · `gold-500` `#c99a3f` · `gold-600` `#ad7d2e` · `gold-700` `#8a6026` ·
`gold-800` `#61441f` · `gold-900` `#3a2915`

- `gold` is an alias of `gold-400` — the default accent.
- `gold-200` / `gold-300` for text on dark; `gold-600`–`gold-900` for hairlines, fills,
  glows at low opacity.
- `gold-soft` (`#d9b25c24`) is the translucent gold wash used on hover.

### Neutrals and semantics

| Token                  | Hex                     | Use                                     |
| ---------------------- | ----------------------- | --------------------------------------- |
| `cream` / `foreground` | `#f2ede2`               | Primary text, headlines                 |
| `mist` / `muted`       | `#a9a397`               | Body copy, secondary text               |
| `stone` / `subtle`     | `#7b756b`               | Captions, meta                          |
| `ash`                  | `#57524b`               | Non-essential meta only — never body    |
| `line`                 | `#ffffff14`             | Default 1px hairline border             |
| `line-strong`          | `#ffffff2e`             | Emphasis border, outline buttons        |
| `background`           | `#060608`               | `body`                                  |
| `surface` / `surface-raised` | `#09090b` / `#121216` | Section or card surfaces        |
| `success`              | `#8ab08f`               | Positive status                         |
| `danger`               | `#c97363`               | Errors, destructive                     |

Default text mapping: headings `text-cream`, body `text-mist`, captions `text-subtle`,
mono meta `text-ash` or `text-gold-200`. Selection is gold on ink; focus is a 1px
`gold-400` outline with 3px offset — both already global, do not recreate them.

---

## 4. Typography

Loaded with `next/font/google` in `src/app/fonts.ts`, self-hosted, variables on `<html>`:

- **Fraunces** — `font-display`, variable, `SOFT`/`WONK`/`opsz`, normal + italic.
  Headings are set to `font-weight: 300` globally. Use italic Fraunces for a single
  emphasised word in a headline — that is a signature move of the brand.
- **Manrope** — `font-sans`, the body default.

### Scale

| Utility            | Size                        | Line height | Tracking | Use                          |
| ------------------ | --------------------------- | ----------- | -------- | ---------------------------- |
| `text-display-2xl` | `clamp(3.5rem, 8.5vw, 8rem)` | 0.90        | -0.035em | Hero statements              |
| `text-display-xl`  | `clamp(2.75rem, 6vw, 5.25rem)` | 0.95      | -0.03em  | Page titles                  |
| `text-display-lg`  | `clamp(2.125rem, 4.2vw, 3.5rem)` | 1.02    | -0.025em | Section titles               |
| `text-display-md`  | `clamp(1.75rem, 2.8vw, 2.5rem)` | 1.08     | -0.02em  | Sub-sections, feature titles |
| `text-heading`     | `1.5rem`                    | 1.2         | -0.015em | Card titles, `h3`/`h4`       |
| `text-subheading`  | `1.125rem`                  | 1.4         | -0.01em  | Lead-ins, quotes             |
| `text-body-lg`     | `1.125rem`                  | 1.7         | —        | Intro paragraphs             |
| `text-body`        | `1rem`                      | 1.7         | —        | Default copy                 |
| `text-body-sm`     | `0.875rem`                  | 1.65        | —        | Dense copy, lists            |
| `text-caption`     | `0.75rem`                   | 1.4         | —        | Captions, meta               |
| `text-eyebrow`     | `0.6875rem`                 | 1           | 0.24em   | Uppercase micro-labels       |

Extra tracking tokens: `tracking-eyebrow` (`0.24em`), `tracking-brand` (`0.34em`, logo
wordmark only).

Rules:

- One display size per view region. Do not stack `text-display-lg` inside a card that
  already sits under a `text-display-xl`.
- `.eyebrow` already applies size, weight 600, tracking, uppercase and gold — use the
  class, not six utilities.
- Mono is only for machine-ish detail (hex values, token names, timings, numbers):
  `font-mono text-[10px]` / `text-[11px]` with `text-ash` or `text-gold-200`. This is the
  one accepted arbitrary size in the system.
- Never use `font-bold` on Fraunces headlines; weight 300 *is* the look.

---

## 5. Layout, spacing, radii, elevation

| Token                 | Utility            | Value     |
| --------------------- | ------------------ | --------- |
| `--spacing-gutter`    | `gap-gutter`, `p-gutter` | 1.5rem |
| `--spacing-section`   | `py-section`, `mt-section` | 7rem |
| `--container-page`    | `max-w-page`       | 88rem     |
| `--container-prose`   | `max-w-prose`      | 42rem     |
| `--radius-card`       | `rounded-card`     | 1.25rem   |
| `--radius-panel`      | `rounded-panel`    | 1.75rem   |
| `--radius-pill`       | `rounded-pill`     | 9999px    |

Shadows: `shadow-lift` (cards, panels), `shadow-gold-sm` (primary action at rest, hover
of secondary), `shadow-gold` (primary action hover). Surfaces also use `glass` for
overlays and `panel` for content cards.

Page rhythm — every full section follows it:

```tsx
<section id="services" className="relative px-6 py-section">
  <div className="mx-auto w-full max-w-page">
    {/* header block */}
    <div className="flex items-center gap-4">
      <span className="font-mono text-caption text-gold/60">02</span>
      <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
      <span className="eyebrow">Services</span>
    </div>
    <h2 className="mt-7 max-w-3xl text-display-lg text-cream">Title</h2>
    <p className="mt-5 max-w-xl text-body text-mist">One or two sentences.</p>

    {/* body */}
    <div className="mt-14 md:mt-16">…</div>
  </div>
</section>
```

Notes:

- Horizontal page padding is `px-6`; content width is capped by `max-w-page`.
- The fixed header is ~64px tall plus 16px offset, so `html { scroll-padding-top: 7rem }`
  already keeps anchor targets clear — do not add manual offsets.
- Grids are `grid gap-4` or `gap-6`; dense dashboards use `lg:grid-cols-12` with
  `lg:col-span-*`.
- Radii: `rounded-panel` on large panels, `rounded-card` on inner cards, `rounded-pill`
  for buttons, tags and the header bar. Inputs use `rounded-xl`.
- Borders are always `border-line` by default, `border-line-strong` when emphasised, and
  `border-gold/30`–`border-gold/60` on hover. Never a solid gold border at rest.

---

## 6. Primitives (CSS classes)

All defined in `@layer components` in `globals.css`.

| Class            | What it does                                                        |
| ---------------- | ------------------------------------------------------------------- |
| `.eyebrow`       | 11px uppercase gold micro-label with 0.24em tracking and a 10px gap |
| `.gold-text`     | Gold gradient clipped to text — for one large emphasised phrase     |
| `.hairline`      | 1px gold rule that fades at both ends; decorative only              |
| `.panel`         | Ink-850 surface, 1px `line` border, `rounded-panel`, top sheen      |
| `.glass`         | Translucent ink with 22px backdrop blur — header, overlays          |
| `.link-underline`| Inline link with a gold-current underline that wipes in on hover    |
| `.marquee-mask`  | Horizontal edge fade for marquee strips                             |
| `.noise`         | Fine film-grain overlay via `::after` (parent needs `relative`)     |
| `.reveal`        | Scroll-reveal start state; `[data-visible="true"]` reveals it       |
| `.intro`         | On-load entrance for the hero, delay via `--intro-delay`            |

`.reveal` and `.intro` are driven for you by `Reveal` / inline `--intro-delay`; do not
hand-write `data-visible`.

---

## 7. Components

### `Reveal` — `src/components/reveal.tsx`

```tsx
<Reveal delay={120} className="lg:col-span-5">…</Reveal>
```

Props: `children`, `className`, `delay` (ms). Fades, lifts 28px and unblurs once, the
first time the element is 12% visible. Stagger by passing `delay={index * 80}` — keep
stagger steps at 80–120ms and never delay more than ~400ms.

### `Button` / `buttonStyles` — `src/components/ui/button.tsx`

```tsx
<Button variant="primary" size="md">Start a project</Button>
<Button variant="outline" size="sm">View work</Button>
<a href="#contact" className={buttonStyles({ variant: "outline", size: "md" })}>
  Enquire
</a>
```

- `variant`: `primary` (gold fill, ink text, shimmer sweep, gold shadow) ·
  `outline` (hairline border, gold on hover) · `ghost` (text only).
- `size`: `sm` (h-9) · `md` (h-11) · `lg` (h-13).
- `buttonStyles()` returns the same classes for links — use it instead of wrapping a
  `Button` in an `<a>`.
- One `primary` action per view. Everything else is `outline` or `ghost`.
- The shimmer sweep is built into `primary`; do not add another highlight.

### `Logo` / `LogoMark` — `src/components/logo.tsx`

```tsx
<Logo />                                        {/* size-9 mark + text-xl */}
<Logo markClassName="size-8" wordmarkClassName="text-lg" />
<LogoMark className="size-6 text-gold/70" />
```

The mark is a nested diamond drawn with hairlines — scale it freely, never recolor it
outside the gold family. `showWordmark={false}` renders the mark alone. Below 380px the
wordmark is hidden in the header (`wordmarkClassName="hidden text-lg min-[380px]:inline"`)
so the lockup and CTA stay inside a 320px viewport.

### `Swatch` — `src/components/ui/swatch.tsx`

```tsx
<Swatch name="Gold 400" token="--color-gold-400" hex="#D9B25C" inverted />
```

Client component; click copies the hex. Pass `inverted` for light fills so the "Copy"
label switches to dark ink. Fill is inline so the displayed hex is always exact.

### `cn` — `src/lib/cn.ts`

```ts
cn("panel p-6", isActive && "border-gold/40", className);
```

Truthy join only — no Tailwind conflict resolution. When a component takes a
`className` escape hatch, put `className` last.

---

## 8. Recipes

**Panel card**

```tsx
<article className="panel group/card h-full p-6 md:p-8 transition-colors duration-500 hover:border-gold/30">
  <p className="eyebrow">Residential</p>
  <h3 className="mt-3 text-heading text-cream">Villa Aurea</h3>
  <p className="mt-2 text-body-sm text-mist">Lake Como, Italy</p>
</article>
```

**CTA pair**

```tsx
<div className="flex flex-wrap items-center gap-3">
  <Button size="lg">Start a project</Button>
  <a href="#work" className={buttonStyles({ variant: "outline", size: "lg" })}>
    See the work <ArrowIcon />
  </a>
</div>
```

**Meta row** — label in `.eyebrow text-mist`, value in `text-body-sm text-subtle`,
separated by `border-line` rules. Never a table for layout.

**Marquee**

```tsx
<div className="marquee-mask overflow-hidden border-y border-line py-4">
  <div className="flex w-max animate-marquee">
    {[0, 1].map((copy) => (
      <span key={copy} aria-hidden={copy === 1} className="flex items-center gap-10 pr-10 text-caption uppercase tracking-[0.28em] text-subtle">
        Interior architecture <span className="size-1 rotate-45 bg-gold/50" />
      </span>
    ))}
  </div>
</div>
```

Two identical copies, the second `aria-hidden`, and a parent with `overflow-hidden` —
that is what makes 50% translate seamless.

**Form field**

```tsx
<input
  className="h-12 w-full rounded-xl border border-line bg-white/[0.02] px-4 text-body-sm text-cream placeholder:text-ash transition-colors duration-300 hover:border-line-strong focus:border-gold/50 focus:outline-none"
  placeholder="Your name"
/>
```

Labels are `.eyebrow text-mist`; helper text is `text-caption text-subtle`; errors are
`text-danger` — never red borders alone, pair with text.

---

## 9. Motion

| Token            | Value                              | Use                          |
| ---------------- | ---------------------------------- | ---------------------------- |
| `ease-luxe`      | `cubic-bezier(0.22, 1, 0.36, 1)`   | Hover, reveals, entrances    |
| `ease-silk`      | `cubic-bezier(0.16, 1, 0.3, 1)`    | Hero, page-level transitions |

Durations: 150ms instant · 300ms default hover · 500ms colour/border · 700ms lift ·
950ms reveal · 1100ms hero. Distances: 6px hover lift, 28px reveal travel, 26px hero
travel. Blur is used as an entrance material (6–8px → 0), never as a hover effect.

Ambient animations available as utilities: `animate-marquee`, `animate-float`,
`animate-glow`, `animate-spin-slow`, `animate-spin-slower`, `animate-shimmer`,
`animate-scroll-hint`.

Every one of these is disabled inside `@media (prefers-reduced-motion: reduce)`, and
`.reveal` is forced visible there. If you add motion, add it to that block too.

Never: bounce, spring, rotate content 360°, animate `width`/`height` for layout, or use
a duration over ~1.2s for anything the user is waiting on.

---

## 10. Accessibility and responsiveness

- Mobile-first; the narrowest supported width is **320px**. Verify at 320, 390, 768,
  1024 and 1440. Body has `overflow-x: hidden`; page wrappers use `overflow-x-clip` —
  do not rely on clipping to hide a layout bug.
- Breakpoints are Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
  The one custom breakpoint in use is `min-[380px]` for the header wordmark.
- Focus: rely on the global `:focus-visible` ring (1px gold, 3px offset). If you
  restyle a control, keep a visible ring and add `focus-visible:outline-none` only when
  you replace it with an equally visible ring.
- Touch targets: buttons and links are at least 36px tall inside padded bars; standalone
  icon controls should be 44×44 (`size-11`).
- Decorative layers (rings, glows, noise, dividers, duplicate marquee copies) get
  `aria-hidden="true"` and usually `pointer-events-none`.
- Headline hierarchy: one `h1` per page, then `h2` per section, `h3` inside.
- Don't communicate state by colour alone; pair gold/red/green with text or an icon.
- Contrast: `cream`, `mist` and `gold-200` are safe on ink. `stone` only for captions,
  `ash` only for non-essential mono meta.

---

## 11. Voice

Editorial, calm, specific. Short declarative sentences. Sentence case for headlines,
uppercase only for `.eyebrow` labels. British spelling (`colour`, `material`, `enquire`).
Avoid exclamation marks, "stunning", "luxury lifestyle", emoji and marketing stacks of
adjectives. Prefer concrete nouns — oak, lime plaster, linen, morning light.

Buttons: `Start a project`, `Enquire`, `View work`, `Book a consultation`.

---

## 12. Anti-patterns

| Don't                                                    | Do                                                    |
| -------------------------------------------------------- | ----------------------------------------------------- |
| `bg-[#d9b25c]`, `text-[#f2ede2]`                         | `bg-gold`, `text-cream`                               |
| Adding a `tailwind.config.js`                            | Add tokens to `@theme` in `globals.css`               |
| `font-bold` headlines                                    | Fraunces at its default 300                           |
| Light section, white card, `bg-white`                    | `panel`, `bg-ink-800`, `bg-white/[0.02]` at most      |
| Gold button + gold link + gold border in one view        | One primary action, gold accents elsewhere            |
| `transition-all duration-1000` on everything             | Specific properties, `duration-300/500`, `ease-luxe`  |
| New `@keyframes` without a reduced-motion rule           | Add the animation to the reduced-motion block         |
| `h-screen` for hero                                      | `min-h-[100svh]`                                      |
| `overflow-hidden` on an ancestor of a sticky element      | `overflow-x-clip` on the page wrapper                |
| Two font families per component                          | Headline Fraunces, everything else Manrope            |

---

## 13. Before you ship

1. Grep your diff for `#` hex values and arbitrary `[..]` sizes — justify each one.
2. Check 320px: no horizontal scroll (`document.documentElement.scrollWidth === innerWidth`).
3. Tab through: focus ring visible on every interactive element.
4. Toggle reduced motion: no reveal, marquee or shimmer motion; content still visible.
5. `pnpm lint` and `npx tsc --noEmit` pass.
6. New tokens or primitives? Add them to this file and to the showcase page.

---

## 14. Machine endpoints

| Endpoint       | What it returns                                        |
| -------------- | ------------------------------------------------------ |
| `/llms.txt`    | This document as `text/plain` (single source, no drift) |
| `/design-system` | Live visual reference with every token and component  |
| `DESIGN_SYSTEM.md` | This document in the repo                          |

`src/app/llms.txt/route.ts` reads this file at request time (and `next.config.ts` adds it
to the deployment trace), so editing the markdown is all that is needed to update what
assistants receive.
