import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Primary navigation link. On hover or keyboard focus the label flips up and a
 * gold copy rises in its place. The motion is short, clipped and reversible —
 * nothing travels more than the label height.
 */
export function NavLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("eyebrow group relative inline-flex", className)}>
      <span className="relative block overflow-hidden">
        <span className="block text-mist transition-transform duration-500 ease-luxe motion-safe:group-hover:-translate-y-[130%] motion-safe:group-focus-visible:-translate-y-[130%]">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center text-gold-200 transition-transform duration-500 ease-luxe motion-safe:translate-y-[130%] motion-safe:group-hover:translate-y-0 motion-safe:group-focus-visible:translate-y-0"
        >
          {label}
        </span>
      </span>
    </Link>
  );
}
