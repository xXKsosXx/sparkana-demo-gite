"use client";

import Image from "next/image";
import { useFadeIn } from "./useFadeIn";

export default function Experiences() {
  const ref = useFadeIn();

  return (
    <section id="experiences" ref={ref}>
      {/* Section 1 — Immersion Agricole */}
      <div className="bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section order-2 md:order-1">
            <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4 font-body">
              Immersion agricole
            </p>
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">
              Safran, Truffes & Cèdre
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 max-w-md">
              Participez à la cueillette du safran gardois, partez à la
              découverte des truffes avec notre trufficulteur, ou assistez à
              une distillation d&apos;huile essentielle de cèdre. Des
              expériences vivantes que vous n&apos;oublierez pas.
            </p>
            <a
              href="#contact"
              className="inline-block border border-primary text-primary text-sm font-semibold px-8 py-3 rounded hover:bg-primary hover:text-white transition-colors"
            >
              Réserver un atelier
            </a>
          </div>
          <div className="fade-in-section order-1 md:order-2 relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/Atelier Safran.png"
              alt="Atelier safran au Mont Bouquet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Section 2 — Gastronomie */}
      <div className="bg-tertiary-container">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/Gastronomie du terroire.png"
              alt="Gastronomie du terroir"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="fade-in-section text-white">
            <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4 font-body">
              Gastronomie du terroir
            </p>
            <h2 className="font-headline text-3xl md:text-4xl mb-6">
              Les Saveurs du Bouquet
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-md">
              Petit-déjeuner avec nos œufs du jour, confiture de figues
              maison et safran gardois. Le soir, dîner privé avec nos
              produits rares : truffes de saison, fromages des causses, vins
              naturels des coteaux.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-tertiary-container text-sm font-semibold px-8 py-3 rounded hover:bg-white/90 transition-colors"
            >
              Découvrir le menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
