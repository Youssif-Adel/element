<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Element design system

Before building or changing UI, read `DESIGN_SYSTEM.md` at the repo root. It is the
single source of truth for the visual system and is also served at `/llms.txt`:

- every token lives in `src/app/globals.css` under `@theme` (no `tailwind.config.*`);
- components are `Logo`, `Reveal`, `Button`/`buttonStyles`, `ArrowIcon`, `Swatch`;
- the rules (dark only, gold as accent, quiet motion, reduced-motion coverage) and the
  anti-pattern list are in that file — follow them over inventing new values;
- live visual reference: `/design-system`.

