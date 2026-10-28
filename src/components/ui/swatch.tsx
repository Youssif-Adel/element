"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type SwatchProps = {
  name: string;
  token: string;
  hex: string;
  /** Light colours need dark overlay text and dark labels. */
  inverted?: boolean;
  className?: string;
};

/**
 * Click-to-copy colour chip. The swatch fill is inline so the hex shown
 * is always exactly what is rendered.
 */
export function Swatch({ name, token, hex, inverted, className }: SwatchProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* Clipboard unavailable — the hex is still visible. */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy ${hex}`}
      className="group/swatch flex flex-col gap-3 text-left"
    >
      <span
        className={cn(
          "relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-xl border border-line p-3",
          className,
        )}
        style={{ backgroundColor: hex }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/swatch:opacity-100"
          style={{ boxShadow: "inset 0 0 0 1px rgba(217,178,92,0.55)" }}
        />
        <span
          className={cn(
            "relative z-10 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ease-luxe",
            copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
            inverted ? "text-ink-900" : "text-cream",
          )}
        >
          {copied ? "Copied" : "Copy"}
        </span>
      </span>

      <span className="flex w-full flex-col gap-1">
        <span className="text-body-sm text-cream">{name}</span>
        <span className="font-mono text-[11px] uppercase tracking-wide text-stone">
          {hex}
        </span>
        <span className="truncate font-mono text-[10px] text-ash">{token}</span>
      </span>
    </button>
  );
}
