"use client";

import { useFadeIn } from "./useFadeIn";

const stats = [
  { value: "3 ha", label: "Forêt préservée" },
  { value: "4", label: "Hébergements uniques" },
  { value: "100-250€", label: "Par nuit" },
  { value: "0", label: "Concurrent direct dans 50km" },
];

export default function Chiffres() {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="bg-primary py-20 px-6">
      <div className="fade-in-section max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-headline italic text-4xl md:text-5xl text-white mb-2">
              {stat.value}
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 font-body">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
