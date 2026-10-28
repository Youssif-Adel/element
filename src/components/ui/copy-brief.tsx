"use client";

import { useState } from "react";
import { Button } from "./button";

type CopyState = "idle" | "copied" | "error";

/** Last-resort copy for browsers that withhold the async clipboard API. */
function legacyCopy(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}

/**
 * Copies the `/llms.txt` brief (the same markdown as `DESIGN_SYSTEM.md`) so it can be
 * pasted straight into an assistant's context.
 */
export function CopyBriefButton({
  label = "Copy the brief",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const [state, setState] = useState<CopyState>("idle");

  async function copy() {
    try {
      const text = await fetch("/llms.txt").then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      });

      if (!navigator.clipboard?.writeText) {
        if (!legacyCopy(text)) throw new Error("Clipboard unavailable");
      } else {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          // Some browsers block the async API without transient activation.
          if (!legacyCopy(text)) throw new Error("Clipboard unavailable");
        }
      }

      setState("copied");
    } catch {
      setState("error");
    }
    window.setTimeout(() => setState("idle"), 2000);
  }

  return (
    <Button
      type="button"
      size="sm"
      onClick={copy}
      className={className}
      aria-live="polite"
    >
      {state === "copied" ? "Copied" : state === "error" ? "Copy failed" : label}
    </Button>
  );
}
