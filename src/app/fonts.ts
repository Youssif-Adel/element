import { Fraunces, Manrope } from "next/font/google";

/**
 * Display face — headlines, numerals, editorial pull quotes.
 * Fraunces is a variable serif with a warm, high-contrast character.
 */
export const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

/**
 * Text face — body copy, navigation, labels, UI.
 * Manrope is a geometric sans with open counters and a quiet rhythm.
 */
export const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
