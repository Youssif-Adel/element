import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/**
 * The Element mark: a nested diamond — a "core within a structure".
 * Drawn with hairlines so it stays crisp at any size.
 */
export function LogoMark({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M24 11.5 36.5 24 24 36.5 11.5 24 24 11.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M24 19.25 28.75 24 24 28.75 19.25 24 24 19.25Z" fill="currentColor" />
      <path
        d="M24 2.5v9M24 36.5v9M2.5 24h9M36.5 24h9"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

/**
 * Full lockup — mark + wordmark. Used in the site header and the spec page.
 */
export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3.5 text-gold", className)}>
      <LogoMark className={cn("shrink-0", markClassName ?? "size-9")} />
      {showWordmark ? (
        <span
          className={cn(
            "font-display leading-none tracking-brand text-cream",
            wordmarkClassName ?? "text-xl",
          )}
        >
          ELEMENT
        </span>
      ) : null}
    </span>
  );
}
