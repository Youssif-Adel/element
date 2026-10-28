import { cn } from "@/lib/cn";

/**
 * The complete icon set. Every glyph in the site comes from this file — never
 * inline an `<svg>` in a component. Icons are square, drawn on a 16px grid and
 * inherit `currentColor`; `size` is the rendered edge in pixels.
 *
 * Add a new glyph here first, then use it.
 */
type IconProps = {
  size?: number;
  className?: string;
};

const glyph = "shrink-0";

/** Right arrow — buttons, links and the next-slide control. */
export function ArrowIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn(glyph, className)}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Pause — the slideshow control. */
export function PauseIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={cn(glyph, className)}
    >
      <rect x="4.2" y="3" width="2.4" height="10" rx="0.6" />
      <rect x="9.4" y="3" width="2.4" height="10" rx="0.6" />
    </svg>
  );
}

/** Play — resumes the slideshow. */
export function PlayIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={cn(glyph, className)}
    >
      <path d="M5 3.3 12.6 8 5 12.7V3.3Z" />
    </svg>
  );
}

/** Two-line menu mark for the compact header. */
export function MenuIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn(glyph, className)}
    >
      <path
        d="M2 5.5h12M2 10.5h8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Close — the full-screen menu. */
export function CloseIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn(glyph, className)}
    >
      <path
        d="m4 4 8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
