import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Logo, LogoMark } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { Button, buttonStyles } from "@/components/ui/button";
import { CopyBriefButton } from "@/components/ui/copy-brief";
import { ArrowIcon, CloseIcon, MenuIcon, PauseIcon, PlayIcon } from "@/components/ui/icons";
import { NavLink } from "@/components/ui/nav-link";
import { Swatch } from "@/components/ui/swatch";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "The Element design system — colour, typography, layout, components and motion.",
};

/* -------------------------------------------------------------------------- */
/*  Content data                                                              */
/* -------------------------------------------------------------------------- */

const nav = [
  { label: "Brand", href: "#brand" },
  { label: "Color", href: "#color" },
  { label: "Type", href: "#type" },
  { label: "Layout", href: "#layout" },
  { label: "Components", href: "#components" },
  { label: "Motion", href: "#motion" },
  { label: "AI", href: "#handoff" },
];

const heroMeta: Array<[string, string]> = [
  ["Studio", "Interior architecture"],
  ["System", "Vol. 01 — 2026"],
  ["Display", "Fraunces"],
  ["Text", "Manrope"],
  ["Palette", "Obsidian & gold"],
];

const marqueeWords = [
  "Interior architecture",
  "Material studies",
  "Furniture",
  "Lighting",
  "Styling",
  "Art direction",
];

const inkSwatches = [
  { name: "Ink 950", token: "--color-ink-950", hex: "#030303" },
  { name: "Ink 900", token: "--color-ink-900", hex: "#060608" },
  { name: "Ink 850", token: "--color-ink-850", hex: "#09090B" },
  { name: "Ink 800", token: "--color-ink-800", hex: "#0D0D10" },
  { name: "Ink 700", token: "--color-ink-700", hex: "#121216" },
  { name: "Ink 500", token: "--color-ink-500", hex: "#1E1E24" },
];

const goldSwatches = [
  { name: "Gold 50", token: "--color-gold-50", hex: "#FDF8EC", inverted: true },
  { name: "Gold 100", token: "--color-gold-100", hex: "#F8EDCF", inverted: true },
  { name: "Gold 200", token: "--color-gold-200", hex: "#F0DCA6", inverted: true },
  { name: "Gold 300", token: "--color-gold-300", hex: "#E6C778", inverted: true },
  { name: "Gold 400", token: "--color-gold-400", hex: "#D9B25C", inverted: true },
  { name: "Gold 500", token: "--color-gold-500", hex: "#C99A3F", inverted: true },
  { name: "Gold 600", token: "--color-gold-600", hex: "#AD7D2E" },
  { name: "Gold 700", token: "--color-gold-700", hex: "#8A6026" },
  { name: "Gold 800", token: "--color-gold-800", hex: "#61441F" },
  { name: "Gold 900", token: "--color-gold-900", hex: "#3A2915" },
];

const neutralSwatches = [
  { name: "Cream", token: "--color-cream", hex: "#F2EDE2", inverted: true },
  { name: "Mist", token: "--color-mist", hex: "#A9A397" },
  { name: "Stone", token: "--color-stone", hex: "#7B756B" },
  { name: "Ash", token: "--color-ash", hex: "#57524B" },
];

const statusSwatches = [
  { name: "Success", token: "--color-success", hex: "#8AB08F", inverted: true },
  { name: "Danger", token: "--color-danger", hex: "#C97363", inverted: true },
];

const typeScale = [
  { token: "display-2xl", sample: "Element", spec: "clamp 56 → 128 · 0.90", className: "text-display-2xl", display: true },
  { token: "display-xl", sample: "Quiet luxury", spec: "clamp 44 → 84 · 0.95", className: "text-display-xl", display: true },
  { token: "display-lg", sample: "Material & light", spec: "clamp 34 → 56 · 1.02", className: "text-display-lg", display: true },
  { token: "display-md", sample: "Considered spaces", spec: "clamp 28 → 40 · 1.08", className: "text-display-md", display: true },
  { token: "heading", sample: "The living room", spec: "24 · 1.20", className: "text-heading", display: true },
  { token: "subheading", sample: "A study in restraint", spec: "18 · 1.40", className: "text-subheading", display: true },
  { token: "body-lg", sample: "Warm plaster, pale oak and a single line of brass.", spec: "18 · 1.70", className: "text-body-lg" },
  { token: "body", sample: "Warm plaster, pale oak and a single line of brass.", spec: "16 · 1.70", className: "text-body" },
  { token: "body-sm", sample: "Warm plaster, pale oak and a single line of brass.", spec: "14 · 1.65", className: "text-body-sm" },
  { token: "caption", sample: "Lake Como · Completion 2026", spec: "12 · 1.40", className: "text-caption" },
];

const spacing = [
  { step: 1, px: 4 },
  { step: 2, px: 8 },
  { step: 3, px: 12 },
  { step: 4, px: 16 },
  { step: 6, px: 24 },
  { step: 8, px: 32 },
  { step: 12, px: 48 },
  { step: 16, px: 64 },
  { step: 24, px: 96 },
  { step: 32, px: 128 },
];

const radii = [
  { token: "rounded-card", value: "1.25rem", className: "rounded-card" },
  { token: "rounded-panel", value: "1.75rem", className: "rounded-panel" },
  { token: "rounded-pill", value: "9999px", className: "rounded-pill" },
];

const breakpoints = [
  { token: "sm", value: "640px" },
  { token: "md", value: "768px" },
  { token: "lg", value: "1024px" },
  { token: "xl", value: "1280px" },
  { token: "2xl", value: "1536px" },
];

const easings = [
  { name: "Luxe", token: "--ease-luxe", value: "cubic-bezier(0.22, 1, 0.36, 1)", use: "Entrances · reveals · hover", className: "ease-luxe" },
  { name: "Silk", token: "--ease-silk", value: "cubic-bezier(0.16, 1, 0.3, 1)", use: "Hero · page transitions", className: "ease-silk" },
  { name: "Linear", token: "linear", value: "linear", use: "Marquees · ambient loops", className: "ease-linear" },
];

const durations = [
  { name: "instant", value: 150 },
  { name: "base", value: 300 },
  { name: "slow", value: 500 },
  { name: "reveal", value: 950 },
  { name: "cinematic", value: 1100 },
];

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-white/[0.02] px-4 font-sans text-body-sm text-cream placeholder:text-ash transition-colors duration-300 hover:border-line-strong focus:border-gold/50 focus:bg-white/[0.04] focus:outline-none focus-visible:outline-none";

/* -------------------------------------------------------------------------- */
/*  Local layout primitives                                                   */
/* -------------------------------------------------------------------------- */

function Section({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-section">
      <div className="mx-auto w-full max-w-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-caption text-gold/60">{number}</span>
            <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="mt-7 max-w-3xl text-display-lg text-cream">{title}</h2>
          {description ? (
            <p className="mt-5 max-w-xl text-body text-mist">{description}</p>
          ) : null}
        </Reveal>
        <div className="mt-14 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

function GroupLabel({ children, meta }: { children: ReactNode; meta?: string }) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-6 border-b border-line pb-3">
      <h3 className="eyebrow text-mist">{children}</h3>
      {meta ? (
        <span className="font-mono text-[10px] tracking-wide text-ash">{meta}</span>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function DesignSystemPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      {/* ---------------------------------------------------------------- nav */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="glass mx-auto flex max-w-page items-center justify-between gap-6 rounded-pill px-4 py-3 md:px-5">
          <a href="#top" aria-label="Element — back to top" className="flex shrink-0 items-center">
            <Logo size={32} wordmarkClassName="hidden min-[380px]:inline" />
          </a>

          <nav
            aria-label="Design system sections"
            className="hidden items-center gap-7 lg:flex"
          >
            {nav.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <a
            href="#contact"
            className={buttonStyles({ size: "sm", className: "shrink-0" })}
          >
            <span className="sm:hidden">Enquire</span>
            <span className="hidden sm:inline">Start a project</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* -------------------------------------------------------------- hero */}
        <section className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(217,178,92,0.16),transparent_62%)]" />
            <div className="absolute left-1/2 top-[58%] size-[62rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-gold/[0.08]" />
            <div className="absolute left-1/2 top-[58%] size-[42rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-gold/[0.1]">
              <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/80 shadow-gold-sm" />
            </div>
            <div className="absolute left-1/2 top-[60%] size-[26rem] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-gold/[0.07] blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="mx-auto flex w-full max-w-page flex-1 items-center px-6 py-16">
            <div className="grid w-full gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p
                  className="eyebrow intro"
                  style={{ "--intro-delay": "80ms" } as CSSProperties}
                >
                  Element · Design system · Vol. 01
                </p>

                <h1
                  className="intro mt-8 max-w-[19ch] text-display-2xl text-cream"
                  style={{ "--intro-delay": "170ms" } as CSSProperties}
                >
                  The art of{" "}
                  <span className="gold-text italic">quiet luxury</span>.
                </h1>

                <p
                  className="intro mt-8 max-w-xl text-body-lg text-mist"
                  style={{ "--intro-delay": "280ms" } as CSSProperties}
                >
                  The visual language of Element — an interior design studio
                  working in warm materials, low light and generous proportion.
                  Every token here is built to be used, not just admired.
                </p>

                <div
                  className="intro mt-10 flex flex-wrap items-center gap-3"
                  style={{ "--intro-delay": "380ms" } as CSSProperties}
                >
                  <a href="#color" className={buttonStyles({ size: "lg" })}>
                    Explore the system
                    <ArrowIcon className="transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#components"
                    className={buttonStyles({ variant: "outline", size: "lg" })}
                  >
                    View components
                  </a>
                </div>
              </div>

              <aside className="lg:col-span-4 lg:pb-2">
                <dl className="border-t border-line">
                  {heroMeta.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                    >
                      <dt className="text-caption uppercase tracking-[0.16em] text-subtle">
                        {label}
                      </dt>
                      <dd className="text-right text-body-sm text-cream">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>

          <div className="relative z-10 border-t border-line">
            <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-6 py-5">
              <span className="text-caption uppercase tracking-[0.16em] text-subtle">
                Interior architecture · Furniture · Objects
              </span>
              <a
                href="#brand"
                className="group flex items-center gap-3 text-caption uppercase tracking-[0.16em] text-mist transition-colors hover:text-gold-200"
              >
                Scroll
                <span className="relative block h-8 w-px overflow-hidden bg-line-strong">
                  <span className="absolute inset-x-0 top-0 h-3 animate-scroll-hint bg-gold" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- marquee */}
        <div className="marquee-mask relative overflow-hidden border-y border-line bg-ink-900/70 py-5">
          <div className="flex w-max animate-marquee items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center gap-10 pr-10"
              >
                {marqueeWords.map((word) => (
                  <span
                    key={`${copy}-${word}`}
                    className="flex items-center gap-10 text-caption uppercase tracking-[0.28em] text-stone"
                  >
                    {word}
                    <span className="size-1 rotate-45 bg-gold/50" aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- brand */}
        <Section
          id="brand"
          number="01"
          eyebrow="Identity"
          title="A mark built from structure."
          description="A gold diamond cradling a serif E. The mark ships as a single transparent PNG, so it reads identically in the header, in print and on a project stamp — no redrawing, no drift."
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <Reveal className="min-w-0 lg:col-span-7">
              <div className="panel noise relative flex min-h-[24rem] items-center justify-center overflow-hidden p-6 sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,rgba(217,178,92,0.18),transparent_62%)]"
                />
                <span className="relative z-10 sm:hidden">
                  <Logo size={44} />
                </span>
                <span className="relative z-10 hidden sm:block">
                  <Logo size={64} />
                </span>
              </div>
            </Reveal>

            <Reveal delay={120} className="grid min-w-0 gap-4 lg:col-span-5 lg:grid-rows-2">
              <div className="panel relative flex items-center justify-center overflow-hidden bg-gold p-8 text-ink-950">
                <LogoMark size={64} />
                <span className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-900/70">
                  Reversed
                </span>
              </div>
              <div className="panel relative flex items-center justify-center overflow-hidden p-8 text-gold">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,178,92,0.1),transparent_65%)]" />
                <LogoMark size={96} className="relative z-10" />
                <span className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                  Monogram
                </span>
              </div>
            </Reveal>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Clear space",
                body: "Keep one mark-height of empty space on every side. The mark never crowds a headline.",
              },
              {
                title: "Minimum size",
                body: "24px for the mark alone, 120px wide for the full lockup. Below that the E loses definition.",
              },
              {
                title: "Contrast",
                body: "Gold on ink is the signature. Ink on gold is the only permitted reversal.",
              },
            ].map((rule, index) => (
              <Reveal key={rule.title} delay={index * 90}>
                <div className="panel h-full rounded-card p-6">
                  <span className="font-mono text-caption text-gold/60">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-heading text-cream">{rule.title}</h3>
                  <p className="mt-2 text-body-sm text-mist">{rule.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- color */}
        <Section
          id="color"
          number="02"
          eyebrow="Color"
          title="Obsidian ground, gold light."
          description="A near-black ground lets photography breathe; gold is reserved for emphasis, never for body copy. Click any swatch to copy its hex."
        >
          <div className="space-y-12">
            <Reveal>
              <GroupLabel meta="--color-ink-*">Obsidian · surfaces</GroupLabel>
              <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
                {inkSwatches.map((swatch) => (
                  <Swatch key={swatch.token} {...swatch} />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <GroupLabel meta="--color-gold-*">Gold · accent scale</GroupLabel>
              <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
                {goldSwatches.map((swatch) => (
                  <Swatch key={swatch.token} {...swatch} />
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <GroupLabel meta="--color-cream / mist / stone / ash">
                    Neutrals · text
                  </GroupLabel>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4">
                    {neutralSwatches.map((swatch) => (
                      <Swatch key={swatch.token} {...swatch} />
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <GroupLabel meta="--color-success / danger">Status</GroupLabel>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-6">
                    {statusSwatches.map((swatch) => (
                      <Swatch key={swatch.token} {...swatch} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="panel rounded-card p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="eyebrow">Accent ratio</p>
                    <p className="mt-3 font-display text-display-md text-gold-200">
                      10%
                    </p>
                    <p className="mt-2 text-body-sm text-subtle">
                      Gold should feel like light falling on a surface — no more
                      than a tenth of any composition.
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Never</p>
                    <p className="mt-3 font-display text-display-md text-cream">
                      Gold on gold
                    </p>
                    <p className="mt-2 text-body-sm text-subtle">
                      No gold text on the gold scale, and no pure white. Cream
                      keeps the palette warm.
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Always</p>
                    <p className="mt-3 font-display text-display-md text-cream">
                      Contrast first
                    </p>
                    <p className="mt-2 text-body-sm text-subtle">
                      Body copy uses mist or cream on ink. Gold stops at 14px
                      unless it is a label.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* -------------------------------------------------------------- type */}
        <Section
          id="type"
          number="03"
          eyebrow="Typography"
          title="Fraunces for presence, Manrope for clarity."
          description="A high-contrast variable serif carries the headlines; a geometric sans keeps long-form copy quiet and legible. Two families, no exceptions."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <article className="panel flex h-full flex-col justify-between gap-10 p-7 md:p-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow">Display</p>
                    <h3 className="mt-4 font-display text-4xl text-cream">
                      Fraunces
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-ash">
                    --font-display
                  </span>
                </div>

                <div>
                  <p className="font-display text-display-md text-cream">
                    Aa Bb Cc Dd
                  </p>
                  <p className="mt-4 font-display text-subheading text-mist">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      { label: "Light 300", weight: 300 },
                      { label: "Regular 400", weight: 400 },
                      { label: "Medium 500", weight: 500 },
                      { label: "Semibold 600", weight: 600 },
                    ].map((weight) => (
                      <span
                        key={weight.label}
                        className="rounded-pill border border-line px-3 py-1.5 text-caption text-stone"
                        style={{ fontWeight: weight.weight }}
                      >
                        {weight.label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="panel flex h-full flex-col justify-between gap-10 p-7 md:p-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow">Text</p>
                    <h3 className="mt-4 font-sans text-4xl font-light tracking-tight text-cream">
                      Manrope
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-ash">
                    --font-sans
                  </span>
                </div>

                <div>
                  <p className="font-sans text-display-md font-light tracking-tight text-cream">
                    Aa Bb Cc Dd
                  </p>
                  <p className="mt-4 font-sans text-subheading text-mist">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      { label: "Light 300", weight: 300 },
                      { label: "Regular 400", weight: 400 },
                      { label: "Medium 500", weight: 500 },
                      { label: "Semibold 600", weight: 600 },
                    ].map((weight) => (
                      <span
                        key={weight.label}
                        className="rounded-pill border border-line px-3 py-1.5 text-caption text-stone"
                        style={{ fontWeight: weight.weight }}
                      >
                        {weight.label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          <div className="mt-16">
            <GroupLabel meta="text-* · line-height · letter-spacing">
              Type scale
            </GroupLabel>
            <div>
              {typeScale.map((type, index) => (
                <Reveal key={type.token} delay={index * 30}>
                  <div className="grid grid-cols-1 gap-3 border-t border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                    <div className="md:col-span-3">
                      <span className="font-mono text-caption text-gold-200">
                        text-{type.token}
                      </span>
                    </div>
                    <div className="md:col-span-7">
                      <p
                        className={cn(
                          type.display ? "font-display" : "font-sans",
                          type.className,
                          "text-cream",
                        )}
                      >
                        {type.sample}
                      </p>
                    </div>
                    <div className="font-mono text-caption text-subtle md:col-span-2 md:text-right">
                      {type.spec}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-10">
            <div className="panel overflow-hidden">
              <div className="grid gap-10 p-7 md:grid-cols-12 md:p-11">
                <div className="md:col-span-7">
                  <p className="eyebrow">Editorial setting</p>
                  <h3 className="mt-6 max-w-lg font-display text-display-md text-cream">
                    Space is the quietest form of luxury.
                  </h3>
                  <p className="mt-5 max-w-prose text-body text-mist">
                    We begin with light. Then proportion, then material. A room
                    should feel inevitable — as though it could not have been
                    arranged any other way. Everything else is decoration.
                  </p>
                </div>
                <div className="md:col-span-5 md:border-l md:border-line md:pl-10">
                  <blockquote className="font-display text-heading text-gold-200">
                    “They didn’t decorate the room. They composed it.”
                  </blockquote>
                  <p className="mt-5 text-caption uppercase tracking-[0.16em] text-subtle">
                    Client note · Villa Aurea
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* ------------------------------------------------------------ layout */}
        <Section
          id="layout"
          number="04"
          eyebrow="Layout"
          title="A 12-column grid with room to breathe."
          description="A 88rem page shell, a 1.5rem gutter and a 7rem section rhythm. Whitespace is the primary material — never fill a column because it is empty."
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="panel h-full p-6 md:p-8">
                <GroupLabel meta="--spacing-*">Spacing scale</GroupLabel>
                <div>
                  {spacing.map((space, index) => (
                    <div
                      key={space.step}
                      className={cn(
                        "flex items-center gap-4 py-2",
                        index !== 0 && "border-t border-line/60",
                      )}
                    >
                      <span className="w-12 shrink-0 font-mono text-caption text-gold-200">
                        {space.step}
                      </span>
                      <span
                        className="h-2 shrink-0 rounded-full bg-gradient-to-r from-gold-700 to-gold-300"
                        style={{ width: `${space.px}px` }}
                      />
                      <span className="font-mono text-[10px] text-subtle">
                        {space.px}px
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <div className="panel h-full p-6 md:p-8">
                <GroupLabel meta="6 → 12 columns">Grid</GroupLabel>
                <div className="grid grid-cols-6 gap-2 md:grid-cols-12">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex h-16 items-end justify-center rounded-lg border border-gold/20 bg-gold-soft pb-1.5 font-mono text-[10px] text-gold-200/70",
                        index >= 6 && "hidden md:flex",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-mist">Shell</p>
                    <p className="mt-3 font-mono text-body-sm text-cream">
                      max-w-page · 88rem
                    </p>
                    <p className="mt-1 text-body-sm text-subtle">
                      Gutters 24px · section rhythm 7rem
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow text-mist">Breakpoints</p>
                    <ul className="mt-3 space-y-1.5">
                      {breakpoints.map((bp) => (
                        <li
                          key={bp.token}
                          className="flex justify-between gap-4 font-mono text-[11px] text-subtle"
                        >
                          <span className="text-cream">{bp.token}</span>
                          <span>{bp.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-4">
            <div className="panel p-6 md:p-8">
              <GroupLabel meta="--radius-*">Radius</GroupLabel>
              <div className="grid gap-4 sm:grid-cols-3">
                {radii.map((radius) => (
                  <div key={radius.token} className="flex flex-col gap-3">
                    <div
                      className={cn(
                        "h-24 w-full border border-gold/25 bg-gold-soft",
                        radius.className,
                      )}
                    />
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-caption text-gold-200">
                        {radius.token}
                      </span>
                      <span className="font-mono text-[10px] text-subtle">
                        {radius.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        {/* --------------------------------------------------------- elevation */}
        <Section
          id="elevation"
          number="05"
          eyebrow="Elevation"
          title="Depth from light, not from drop shadows."
          description="Surfaces lift through a one-pixel inset highlight and a long, soft shadow. Gold shadows are used only for interactive emphasis."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { token: "shadow-lift", label: "Lift", detail: "Cards · panels", className: "shadow-lift" },
              { token: "shadow-gold", label: "Gold", detail: "Primary actions", className: "shadow-gold" },
              { token: "shadow-gold-sm", label: "Gold soft", detail: "Hover · focus", className: "shadow-gold-sm" },
              { token: "glass", label: "Glass", detail: "Navigation · overlays", className: "glass" },
            ].map((item, index) => (
              <Reveal key={item.token} delay={index * 80}>
                <div
                  className={cn(
                    "flex h-full flex-col justify-between gap-16 rounded-card border border-line p-6",
                    item.className,
                  )}
                >
                  <span className="size-2 rounded-full bg-gold/70" aria-hidden="true" />
                  <div>
                    <p className="text-body-sm text-cream">{item.label}</p>
                    <p className="mt-1 text-caption text-subtle">{item.detail}</p>
                    <p className="mt-4 font-mono text-[10px] text-gold-200/80">
                      {item.token}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <div className="panel noise relative overflow-hidden p-7 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="eyebrow">Hairline & grain</p>
                <span className="font-mono text-[10px] text-ash">
                  .hairline · .noise
                </span>
              </div>
              <div className="mt-7 space-y-7">
                <div className="hairline" />
                <p className="max-w-xl text-body-sm text-mist">
                  A 1px gold rule, faded at both ends, separates ideas without
                  adding weight. The film grain sits at 4% and is only visible
                  on close inspection.
                </p>
                <div className="hairline" />
              </div>
            </div>
          </Reveal>
        </Section>

        {/* -------------------------------------------------------- components */}
        <Section
          id="components"
          number="06"
          eyebrow="Components"
          title="Calm controls, precise feedback."
          description="Controls are quiet until touched. Uppercase micro-labels at 11px, pill geometry, and exactly one gold element per composition."
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="panel h-full p-7 md:p-9">
                <GroupLabel meta="variant · size · state">Buttons</GroupLabel>

                <div className="flex flex-wrap items-center gap-3">
                  <Button>
                    Start a project
                    <ArrowIcon className="transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline">View work</Button>
                  <Button variant="ghost">Read more</Button>
                  <Button variant="glass">Glass</Button>
                </div>

                <div className="mt-8 flex flex-wrap items-end gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="sm" disabled>
                    Disabled
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button variant="glass" size="icon-sm" aria-label="Previous">
                    <ArrowIcon className="rotate-180" />
                  </Button>
                  <Button variant="glass" size="icon-sm" aria-label="Next">
                    <ArrowIcon />
                  </Button>
                  <Button
                    variant="glass"
                    size="icon-sm"
                    aria-label="Pause slideshow"
                  >
                    <PauseIcon />
                  </Button>
                  <a href="#contact" className="link-underline text-body-sm text-gold-200">
                    Inline link
                  </a>
                </div>

                <div className="mt-8 border-t border-line pt-6">
                  <p className="eyebrow text-mist">Icon set</p>
                  <div className="mt-3 flex flex-wrap items-center gap-5 text-subtle">
                    {[
                      ["ArrowIcon", <ArrowIcon key="arrow" />],
                      ["PlayIcon", <PlayIcon key="play" />],
                      ["PauseIcon", <PauseIcon key="pause" />],
                      ["MenuIcon", <MenuIcon key="menu" />],
                      ["CloseIcon", <CloseIcon key="close" />],
                    ].map(([name, icon]) => (
                      <span key={name as string} className="flex items-center gap-2">
                        {icon}
                        <span className="font-mono text-[10px]">{name}</span>
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-caption text-subtle">
                    Every glyph lives in <code className="text-cream">src/components/ui/icons.tsx</code> —
                    never inline an <code className="text-cream">&lt;svg&gt;</code> in a component.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="panel h-full p-7 md:p-9">
                <GroupLabel meta="input · textarea">Fields</GroupLabel>
                <div className="flex flex-col gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="eyebrow text-mist">Full name</span>
                    <input
                      type="text"
                      placeholder="Ada Lovelace"
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="eyebrow text-mist">Project brief</span>
                    <textarea
                      rows={4}
                      placeholder="A calm, light-filled apartment on the lake…"
                      className={cn(inputClass, "h-auto resize-none py-3")}
                    />
                  </label>
                  <Button size="sm" className="self-start">
                    Send enquiry
                    <ArrowIcon />
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <div className="panel h-full p-7 md:p-9">
                <GroupLabel meta="tag · chip · dot">Labels</GroupLabel>
                <div className="flex flex-wrap gap-2">
                  {["Residential", "Hospitality", "Commercial", "Furniture"].map(
                    (tag, index) => (
                      <span
                        key={tag}
                        className={cn(
                          "rounded-pill border px-4 py-1.5 text-eyebrow uppercase",
                          index === 0
                            ? "border-gold/40 bg-gold-soft text-gold-200"
                            : "border-line bg-white/[0.02] text-mist",
                        )}
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>

                <div className="mt-8 space-y-3">
                  <p className="flex items-center gap-3 text-body-sm text-mist">
                    <span className="size-1.5 rounded-full bg-gold" />
                    Available for 2026 commissions
                  </p>
                  <p className="flex items-center gap-3 text-body-sm text-mist">
                    <span className="size-1.5 rounded-full bg-success" />
                    Project delivered
                  </p>
                  <p className="flex items-center gap-3 text-body-sm text-mist">
                    <span className="size-1.5 rounded-full bg-danger" />
                    Enquiry closed
                  </p>
                </div>

                <div className="mt-8">
                  <span className="eyebrow text-mist">Status badge</span>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-pill border border-line bg-ink-700 px-3 py-1.5">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60" />
                      <span className="relative inline-flex size-2 rounded-full bg-gold" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-cream">
                      In progress
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <div className="grid h-full gap-4 sm:grid-cols-2">
                <article className="group/card panel overflow-hidden transition-all duration-700 ease-luxe hover:-translate-y-1 hover:border-gold/25 hover:shadow-gold-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3a2915,transparent_55%),linear-gradient(150deg,#17171c,#09090b_65%)]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-24 -right-16 size-72 rounded-full border border-gold/20"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-10 -right-2 size-44 rounded-full border border-gold/10"
                    />
                    <span className="absolute left-5 top-5 rounded-pill border border-line-strong bg-ink-950/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cream backdrop-blur">
                      2026 · Residence
                    </span>
                    <LogoMark size={24} className="absolute right-5 top-5" />
                  </div>
                  <div className="flex items-end justify-between gap-4 p-5">
                    <div>
                      <h4 className="text-heading text-cream">Villa Aurea</h4>
                      <p className="mt-1 text-caption text-subtle">
                        Lake Como, Italy
                      </p>
                    </div>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-gold transition-colors duration-500 group-hover/card:border-gold/50 group-hover/card:bg-gold-soft">
                      <ArrowIcon className="size-4" />
                    </span>
                  </div>
                </article>

                <figure className="panel flex flex-col justify-between gap-8 p-6">
                  <div>
                    <LogoMark size={24} />
                    <blockquote className="mt-6 font-display text-heading text-cream">
                      “They didn’t decorate the room. They composed it.”
                    </blockquote>
                  </div>
                  <figcaption className="text-caption uppercase tracking-[0.16em] text-subtle">
                    Private client · Como
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ------------------------------------------------------------ motion */}
        <Section
          id="motion"
          number="07"
          eyebrow="Motion"
          title="Subtle, slow, never showy."
          description="Motion should read as material confidence: long durations, soft easing, small distances. Nothing bounces, nothing spins unless it is ambient."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {easings.map((easing, index) => (
              <Reveal key={easing.token} delay={index * 90}>
                <div className="group/ease panel h-full rounded-card p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-heading text-cream">{easing.name}</h3>
                    <span className="font-mono text-[10px] text-gold-200">
                      {easing.token}
                    </span>
                  </div>

                  <div className="relative mt-7 h-9 rounded-pill border border-line bg-white/[0.02] p-1">
                    <span
                      className={cn(
                        "absolute left-1 top-1 size-7 rounded-full bg-gold shadow-gold-sm transition-[left] duration-[1100ms] group-hover/ease:left-[calc(100%-2rem)]",
                        easing.className,
                      )}
                    />
                  </div>

                  <p className="mt-5 font-mono text-[10px] leading-relaxed text-subtle">
                    {easing.value}
                  </p>
                  <p className="mt-2 text-caption text-ash">{easing.use}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-12">
            <Reveal className="min-w-0 lg:col-span-5">
              <div className="panel h-full p-6 md:p-8">
                <GroupLabel meta="milliseconds">Duration</GroupLabel>
                <ul className="space-y-4">
                  {durations.map((duration) => (
                    <li key={duration.name} className="flex items-center gap-4">
                      <span className="w-20 shrink-0 text-caption text-subtle">
                        {duration.name}
                      </span>
                      <span className="h-px flex-1 bg-line" aria-hidden="true" />
                      <span
                        className="h-1.5 rounded-full bg-gold/70"
                        style={{ width: `${duration.value / 12}px` }}
                      />
                      <span className="w-14 text-right font-mono text-[10px] text-mist">
                        {duration.value}ms
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-body-sm text-subtle">
                  Hover 300ms · reveals 950ms · hero 1100ms. Never animate
                  longer than the content takes to read.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100} className="min-w-0 lg:col-span-7">
              <div className="panel flex h-full flex-col justify-between gap-8 p-6 md:p-8">
                <GroupLabel meta="hover · reveal · ambient">In practice</GroupLabel>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="group/lift rounded-card border border-line bg-ink-800 p-5 transition-all duration-700 ease-luxe hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-gold">
                    <p className="eyebrow">Hover</p>
                    <p className="mt-3 text-heading text-cream">Lift & glow</p>
                    <p className="mt-1 font-mono text-[10px] text-subtle">
                      -6px · 700ms · luxe
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-card border border-line bg-ink-800 p-5">
                    <p className="eyebrow">Ambient</p>
                    <p className="mt-3 text-heading text-cream">Marquee</p>
                    <div className="marquee-mask mt-4 overflow-hidden">
                      <div className="flex w-max animate-marquee">
                        {[0, 1].map((copy) => (
                          <span
                            key={copy}
                            aria-hidden={copy === 1}
                            className="whitespace-nowrap pr-6 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-200/70"
                          >
                            Light · Material · Proportion ·
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <p className="max-w-sm text-body-sm text-subtle">
                    Every transition collapses when{" "}
                    <span className="text-mist">prefers-reduced-motion</span> is
                    set.
                  </p>
                  <Button size="sm">Hover the gold</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ---------------------------------------------------------- handoff */}
        <Section
          id="handoff"
          number="08"
          eyebrow="Handoff"
          title="A design system an assistant can read."
          description="Everything on this page is also published as plain text — written for people, structured for models. Point an assistant at the brief and it can extend the system without reverse-engineering the markup."
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="panel flex h-full flex-col justify-between gap-8 p-6 md:p-8">
                <div>
                  <GroupLabel meta="text/plain · utf-8">The brief</GroupLabel>
                  <p className="max-w-xl text-body text-mist">
                    One file carries the palette, type scale, primitives, component
                    APIs, motion rules and anti-patterns. It is read straight from{" "}
                    <span className="font-mono text-body-sm text-cream">
                      DESIGN_SYSTEM.md
                    </span>
                    , so the repository and the endpoint cannot drift apart.
                  </p>

                  <ul className="mt-7 grid gap-3 text-body-sm text-subtle sm:grid-cols-2">
                    {[
                      "Colour and type tokens",
                      "Components, icons and buttons",
                      "Layout and motion rules",
                      "Dos, don'ts and a checklist",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1 shrink-0 rotate-45 bg-gold/60"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <CopyBriefButton />
                  <a
                    href="/llms.txt"
                    target="_blank"
                    rel="noreferrer"
                    className={buttonStyles({ variant: "outline", size: "sm" })}
                  >
                    Open /llms.txt
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="min-w-0 lg:col-span-5">
              <div className="panel flex h-full min-w-0 flex-col gap-6 p-6 md:p-8">
                <GroupLabel meta="plain text">What&rsquo;s inside</GroupLabel>

                <div className="min-w-0 rounded-card border border-line bg-ink-950/60 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                    DESIGN_SYSTEM.md
                  </p>
                  <div className="mt-4 space-y-2.5 font-mono text-[10px] sm:text-[11px]">
                    {[
                      ["--color-gold-400", "#D9B25C"],
                      ["--color-ink-900", "#060608"],
                      ["--font-display", "Fraunces"],
                      ["--radius-panel", "1.75rem"],
                      ["--spacing-section", "7rem"],
                    ].map(([token, value]) => (
                      <div
                        key={token}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="text-gold-200/80">{token}</span>
                        <span className="text-right text-mist">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <dl className="space-y-4 border-t border-line pt-6 text-body-sm">
                  {[
                    ["/llms.txt", "The brief, served as text"],
                    ["/design-system", "This page — the visual reference"],
                    ["DESIGN_SYSTEM.md", "The same file, in the repository"],
                  ].map(([path, note]) => (
                    <div
                      key={path}
                      className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="font-mono text-[11px] text-gold-200">{path}</dt>
                      <dd className="text-caption text-subtle sm:text-right">{note}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ------------------------------------------------------------ footer */}
        <footer id="contact" className="relative overflow-hidden border-t border-line px-6 pb-10 pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,178,92,0.1),transparent_70%)]"
          />
          <div className="mx-auto w-full max-w-page">
            <div className="grid gap-12 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <Logo size={48} />
                <p className="mt-7 max-w-md text-body text-mist">
                  Element is an interior design studio working across
                  residential and hospitality spaces. We design slowly, in
                  natural materials and available light.
                </p>
                <a
                  href="mailto:studio@element.design"
                  className="link-underline mt-6 inline-block text-body-sm text-gold-200"
                >
                  studio@element.design
                </a>
              </div>

              <div className="md:col-span-5">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="eyebrow text-mist">System</p>
                    <ul className="mt-4 space-y-2 text-body-sm text-subtle">
                      <li>Version 1.0</li>
                      <li>Updated 2026</li>
                      <li>Tokens in globals.css</li>
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow text-mist">Typefaces</p>
                    <ul className="mt-4 space-y-2 text-body-sm text-subtle">
                      <li>Fraunces</li>
                      <li>Manrope</li>
                      <li>Self-hosted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-caption text-ash sm:flex-row sm:items-center sm:justify-between">
              <span>© 2026 Element Studio. All rights reserved.</span>
              <a
                href="#top"
                className="text-subtle transition-colors duration-300 hover:text-gold-200"
              >
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
