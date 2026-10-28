import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * The Element mark — a gold diamond cradling a serif E.
 *
 * The artwork ships as `public/logo.png`, so the mark is identical wherever it
 * appears. `size` is the square edge in pixels; `className` can override it
 * (for example `size-6`) when a layout needs a different dimension.
 */
export function LogoMark({
  size = 32,
  priority,
  className,
}: {
  size?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={cn("shrink-0 select-none object-contain", className)}
    />
  );
}

/**
 * Full lockup — mark plus wordmark.
 *
 * The wordmark's font size derives from `size` (roughly 0.55× the mark), so a
 * single number keeps the lockup in proportion. `wordmarkClassName` is for
 * display or colour changes (`hidden min-[380px]:inline`, `text-gold-200`),
 * not for sizing.
 */
export function Logo({
  size = 34,
  priority,
  wordmark = true,
  className,
  wordmarkClassName,
}: {
  size?: number;
  priority?: boolean;
  wordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3.5", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        priority={priority}
        style={{ width: size, height: size }}
        className="shrink-0 select-none object-contain"
      />
      {wordmark ? (
        <span
          style={{ fontSize: Math.round(size * 0.55) }}
          className={cn(
            "font-display leading-none tracking-brand text-cream",
            wordmarkClassName,
          )}
        >
          ELEMENT
        </span>
      ) : null}
    </span>
  );
}
