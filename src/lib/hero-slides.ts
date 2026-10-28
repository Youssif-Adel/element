/**
 * Hero slides.
 *
 * Mock data standing in for the CMS: once the backend exists this array is
 * replaced by a fetch, so keep the shape serialisable and the copy in the
 * studio's voice.
 */
export type HeroSlide = {
  id: string;
  /** Style tag shown in the eyebrow, the giant word and the thumbnail label. */
  style: string;
  project: string;
  location: string;
  year: string;
  headline: string;
  /** Local file in `public/hero` — swap for a CDN URL later. */
  src: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "luxury",
    style: "Luxury",
    project: "Casa Lume",
    location: "Lake Como, Italy",
    year: "2026",
    headline: "Rooms that hold the light.",
    src: "/hero/luxury.jpg",
    alt: "Timber and glass house at dusk, warm interior light spilling onto a terrace",
  },
  {
    id: "modern",
    style: "Modern",
    project: "Nocturne House",
    location: "Antwerp, Belgium",
    year: "2025",
    headline: "Structure, quietly resolved.",
    src: "/hero/modern.jpg",
    alt: "Black modernist facade at dusk with a softly lit interior",
  },
  {
    id: "minimal",
    style: "Minimal",
    project: "Pavilion 06",
    location: "Kyoto, Japan",
    year: "2025",
    headline: "Less, held with care.",
    src: "/hero/minimal.jpg",
    alt: "Dark dining table against a raw concrete wall in low light",
  },
  {
    id: "organic",
    style: "Organic",
    project: "Materia",
    location: "Ibiza, Spain",
    year: "2024",
    headline: "Material before ornament.",
    src: "/hero/organic.jpg",
    alt: "Living room in warm leather, oak and lime plaster",
  },
  {
    id: "3",
    style: "Organic",
    project: "Materia",
    location: "Ibiza, Spain",
    year: "2024",
    headline: "Material before ornament.",
    src: "/hero/organic.jpg",
    alt: "Living room in warm leather, oak and lime plaster",
  },
  {
    id: "2",
    style: "Organic",
    project: "Materia",
    location: "Ibiza, Spain",
    year: "2024",
    headline: "Material before ornament.",
    src: "/hero/organic.jpg",
    alt: "Living room in warm leather, oak and lime plaster",
  },
  {
    id: "1",
    style: "Organic",
    project: "Materia",
    location: "Ibiza, Spain",
    year: "2024",
    headline: "Material before ornament.",
    src: "/hero/organic.jpg",
    alt: "Living room in warm leather, oak and lime plaster",
  },
];
