import type { Metadata, Viewport } from "next";
import { display, sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Element — Interior Design Studio",
    template: "%s · Element",
  },
  description:
    "Element is an interior design studio shaping calm, considered spaces where material, light and proportion do the talking.",
  applicationName: "Element",
  alternates: {
    // Machine-readable design system brief for AI assistants.
    types: { "text/plain": "/llms.txt" },
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
