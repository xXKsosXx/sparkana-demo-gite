"use client";

import { useFadeIn } from "./useFadeIn";
import GalerieLightbox from "./GalerieLightbox";

const photos = [
  { src: "/images/galerie-1.png", titre: "Tiny House des Cèdres" },
  { src: "/images/galerie-2.png", titre: "Cabane dans les Arbres" },
  { src: "/images/galerie-3.png", titre: "La Kerterre" },
  { src: "/images/galerie-4.png", titre: "La forêt de cèdres" },
  { src: "/images/galerie-5.png", titre: "Gastronomie du terroir" },
  { src: "/images/galerie-6.png", titre: "Le Mont Bouquet" },
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
