/**
 * Tiny class-name joiner — keeps components dependency-free.
 * Usage: cn("base", condition && "modifier", className)
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
