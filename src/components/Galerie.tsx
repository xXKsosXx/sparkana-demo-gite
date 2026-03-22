"use client";

import { useFadeIn } from "./useFadeIn";
import GalerieLightbox from "./GalerieLightbox";

const photos = [
  { src: "/images/galerie-1.png", titre: "Forêt de Cèdres au matin" },
  { src: "/images/galerie-2.png", titre: "Mont Bouquet" },
  { src: "/images/galerie-3.png", titre: "Biches dans la forêt" },
  { src: "/images/galerie-4.png", titre: "Lavandes" },
  { src: "/images/galerie-5.png", titre: "Village d'Uzès" },
  { src: "/images/galerie-6.png", titre: "Nuit étoilée Cévennes" },
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
