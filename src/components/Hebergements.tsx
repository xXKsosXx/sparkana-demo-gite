"use client";

import Image from "next/image";
import { useFadeIn } from "./useFadeIn";

interface Hebergement {
  nom: string;
  description: string;
  image: string;
  badge?: string;
  prix?: string;
}

const defaultHebergements: Hebergement[] = [
  {
    nom: "La Tiny House des Cèdres",
    description:
      "Nichée au cœur de notre forêt de cèdres du Maghreb centenaires, cette tiny house en bois local vous plonge dans un silence absolu. Terrasse privée, vue sur les collines gardoises.",
    image: "/images/tiny house.png",
    badge: "Disponible",
    prix: "à partir de 150€/nuit",
  },
  {
    nom: "La Cabane dans les Arbres",
    description:
      "Perchée à 4 mètres de hauteur parmi les chênes, cette cabane suspendue offre un point de vue unique sur le sanctuaire des biches au lever du soleil.",
    image: "/images/Cabane dans les arbres.png",
    prix: "à partir de 180€/nuit",
  },
  {
    nom: "La Kerterre",
    description:
      "Architecture vivante en terre et paille, la kerterre s'intègre naturellement dans le paysage. Fraîche en été, douce en hiver — une expérience architecturale unique en France.",
    image: "/images/Kerterre.png",
    badge: "Nouveau",
    prix: "à partir de 120€/nuit",
  },
];

export default function Hebergements({
  data,
}: {
  data?: Hebergement[];
}) {
  const ref = useFadeIn();
  const hebergements = data && data.length > 0 ? data : defaultHebergements;

  return (
    <section
      id="hebergements"
      ref={ref}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="fade-in-section text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4 font-body">
          Nos hébergements
        </p>
        <h2 className="font-headline text-4xl md:text-5xl text-primary">
          Trois refuges d&apos;exception
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hebergements.map((h, i) => (
          <div
            key={h.nom}
            className={`fade-in-section group ${i === 1 ? "md:mt-12" : ""}`}
          >
            {/* Image container */}
            <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6">
              <Image
                src={h.image}
                alt={h.nom}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {h.badge && (
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded">
                  {h.badge}
                </span>
              )}
            </div>

            {/* Text */}
            <h3 className="font-headline text-xl text-primary mb-3">
              {h.nom}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
              {h.description}
            </p>
            {h.prix && (
              <p className="font-headline italic text-sm text-primary mb-4">
                {h.prix}
              </p>
            )}
            <a
              href="#contact"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-container transition-colors"
            >
              Voir les détails
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
