import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <SiteHeader />
      <main>
        <Hero />
      </main>
    </div>
  );
}
