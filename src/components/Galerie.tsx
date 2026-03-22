"use client";

import { useFadeIn } from "./useFadeIn";
import GalerieLightbox from "./GalerieLightbox";

const photos = [
  { src: "/images/tiny house.png", titre: "Tiny House des Cèdres" },
  { src: "/images/Cabane dans les arbres.png", titre: "Cabane dans les Arbres" },
  { src: "/images/Kerterre.png", titre: "La Kerterre" },
  { src: "/images/Hero.png", titre: "La forêt de cèdres" },
  { src: "/images/gastronomie.jpg", titre: "Gastronomie du terroir" },
  { src: "/images/mont-bouquet.jpg", titre: "Le Mont Bouquet" },
];

export default function Galerie() {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="fade-in-section text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4 font-body">
          Galerie
        </p>
        <h2 className="font-headline text-4xl md:text-5xl text-primary">
          Instantanés du domaine
        </h2>
      </div>
      <div className="fade-in-section">
        <GalerieLightbox photos={photos} />
      </div>
    </section>
  );
}
