import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * `/llms.txt` — the design system brief for AI assistants.
 *
 * `DESIGN_SYSTEM.md` is the single source of truth: this handler reads it at build
 * at request time, so the guide in the repo and what assistants download can never
 * drift apart. Edit the markdown, not this file.
 *
 * The file is added to the deployment trace in `next.config.ts`
 * (`outputFileTracingIncludes`), so it ships with the serverless bundle.
 */
export async function GET() {
  const file = await readFile(
    path.join(process.cwd(), "DESIGN_SYSTEM.md"),
    "utf8",
  );

  return new Response(file, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
