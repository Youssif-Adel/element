"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { Button, buttonStyles } from "@/components/ui/button";
import { ArrowIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { NavLink } from "@/components/ui/nav-link";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Studio", href: "/#studio" },
  { label: "Projects", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Journal", href: "/#journal" },
];

/**
 * Fixed glass pill. Desktop shows the links and a single Join button; below
 * `lg` a hamburger opens a full-screen menu that slides in from the right.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Scroll lock, Escape, focus trap and focus return while the menu is open. */
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = openButtonRef.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  /* A menu cannot stay open across the desktop breakpoint. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="glass mx-auto flex max-w-page items-center justify-between gap-4 rounded-pill px-3 py-2.5 sm:px-5 sm:py-3">
          <Link
            href="/"
            aria-label="Element — home"
            className="flex shrink-0 items-center"
          >
            <Logo
              size={32}
              priority
              wordmarkClassName="hidden min-[380px]:inline"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {nav.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden lg:block">
              <Link
                href="/#contact"
                className={buttonStyles({ variant: "outline", size: "sm" })}
              >
                Join
              </Link>
            </span>

            <Button
              ref={openButtonRef}
              variant="ghost"
              size="icon-sm"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
              className="lg:hidden"
            >
              <MenuIcon size={18} />
            </Button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------ mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] overflow-hidden lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          ref={panelRef}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!open}
          className={cn(
            "relative ml-auto flex h-full w-full flex-col overflow-y-auto bg-ink-950 px-6 pb-10 pt-5 sm:px-8",
            "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-in-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(217,178,92,0.14),transparent_60%)]" />
            <div className="noise absolute inset-0" />
          </div>

          <div className="relative flex items-center justify-between gap-4">
            <Link
              href="/"
              onClick={close}
              aria-label="Element — home"
              className="flex items-center"
            >
              <Logo size={30} />
            </Link>
            <Button
              ref={closeButtonRef}
              variant="outline"
              size="icon-sm"
              aria-label="Close menu"
              onClick={close}
            >
              <CloseIcon size={18} />
            </Button>
          </div>

          <p className="eyebrow relative mt-10 text-gold/70">Menu</p>

          <nav
            aria-label="Mobile"
            className="relative mt-6 flex flex-col border-t border-line"
          >
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="group flex items-center justify-between gap-6 border-b border-line py-5"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-gold/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-display-md text-cream transition-colors duration-300 group-hover:text-gold-200">
                    {item.label}
                  </span>
                </span>
                <ArrowIcon className="text-subtle transition-transform duration-500 ease-luxe group-hover:translate-x-1 group-hover:text-gold" />
              </Link>
            ))}
          </nav>

          <div className="relative mt-auto flex flex-col gap-5 pt-12">
            <Link
              href="/#contact"
              onClick={close}
              className={buttonStyles({ size: "md", className: "w-full" })}
            >
              Join
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
