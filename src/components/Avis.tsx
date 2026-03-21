"use client";

import { Star } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

interface AvisItem {
  auteur: string;
  ville: string;
  texte: string;
  note: number;
}

const defaultAvis: AvisItem[] = [
  {
    auteur: "Elena R.",
    ville: "Paris",
    texte:
      "Un silence rare, une nature préservée. Les biches venaient jusqu'à notre terrasse au lever du soleil. Une magie que je n'avais jamais vécue en France.",
    note: 5,
  },
  {
    auteur: "Markus T.",
    ville: "Berlin",
    texte:
      "La tiny house dans les cèdres est un chef-d'œuvre de simplicité. On déconnecte complètement. Le safran du petit-déjeuner était une révélation.",
    note: 5,
  },
  {
    auteur: "Sophie M.",
    ville: "Lyon",
    texte:
      "L'atelier de distillation de cèdre restera un souvenir inoubliable. Et la kerterre — architecturalement stupéfiante, incroyablement confortable.",
    note: 5,
  },
];

export default function Avis({ data }: { data?: AvisItem[] }) {
  const ref = useFadeIn();
  const avis = data && data.length > 0 ? data : defaultAvis;

  return (
    <section
      id="avis"
      ref={ref}
      className="bg-surface-container-low py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-section text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-primary">
            Ils ont retrouvé le Silence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {avis.map((a) => (
            <div
              key={a.auteur}
              className="fade-in-section bg-white rounded-lg p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: a.note }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 italic">
                &ldquo;{a.texte}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="text-sm font-semibold text-primary">{a.auteur}</p>
                <p className="text-xs text-on-surface-variant">{a.ville}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
