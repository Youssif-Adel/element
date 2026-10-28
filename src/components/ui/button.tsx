import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "outline" | "ghost" | "glass";
export type ButtonSize = "sm" | "md" | "lg" | "icon-sm" | "icon";

const base =
  "group relative inline-flex cursor-pointer select-none items-center justify-center gap-2.5 overflow-hidden rounded-pill font-sans leading-none transition-all duration-500 ease-luxe focus-visible:outline-offset-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-ink-950 shadow-gold-sm hover:bg-gold-300 hover:shadow-gold active:scale-[0.985]",
  outline:
    "border border-line-strong bg-white/[0.02] text-cream hover:border-gold/60 hover:bg-gold-soft hover:text-gold-200 active:scale-[0.985]",
  ghost: "text-mist hover:text-gold",
  glass:
    "border border-line-strong bg-ink-950/35 text-cream backdrop-blur hover:border-gold/60 hover:bg-ink-950/55 hover:text-gold-200 active:scale-[0.985]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-5 text-eyebrow font-semibold uppercase",
  md: "h-11 px-6 text-eyebrow font-semibold uppercase",
  lg: "h-13 px-8 text-caption font-semibold uppercase tracking-[0.2em]",
  "icon-sm": "size-10",
  icon: "size-11",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

/**
 * The only button in the system. Pick a variant and a size instead of styling
 * one by hand; links use `buttonStyles()` with the same options. Icon-only
 * buttons still need an `aria-label`.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}) {
  return (
    <button className={buttonStyles({ variant, size, className })} {...props}>
      {variant === "primary" ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-pill"
        >
          <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-md transition-transform duration-700 ease-luxe group-hover:translate-x-[420%]" />
        </span>
      ) : null}
      <span className="relative inline-flex items-center gap-2.5">
        {children}
      </span>
    </button>
  );
}
