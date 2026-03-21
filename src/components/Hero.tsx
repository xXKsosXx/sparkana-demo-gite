import { ChevronDown } from "lucide-react";

const badges = [
  "4 Tiny Houses · 100-250€/nuit",
  "Forêt de Cèdres Centenaires",
  "Safran & Truffes du Gard",
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image — mobile: recadré pour voir le cerf en bas */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_60%] md:bg-center"
        style={{ backgroundImage: "url('/images/Hero.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl">
        <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 font-body font-light whitespace-nowrap">
          Agro-resort intimiste · Bouquet, Gard
        </p>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-4">
          L&apos;Écrin de la Biche
        </h1>
        <p className="font-headline italic text-base sm:text-lg md:text-xl text-white/80 mb-10">
          Safran · Truffes · Forêt de Cèdres
        </p>
        {/* Boutons — empilés full width sur mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#hebergements"
            className="w-full sm:w-auto bg-white text-primary font-semibold text-sm px-8 py-3.5 rounded hover:bg-surface-container transition-colors text-center"
          >
            Découvrir nos séjours
          </a>
          <a
            href="#experiences"
            className="w-full sm:w-auto border border-white text-white font-semibold text-sm px-8 py-3.5 rounded hover:bg-white/10 transition-colors text-center"
          >
            Nos expériences
          </a>
        </div>
      </div>

      {/* Floating badges — masqués sur mobile, visibles à partir de md */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-wrap justify-center gap-3 px-6">
        {badges.map((badge) => (
          <span
            key={badge}
            className="border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 text-center animate-scroll-bounce">
        <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2 font-body">
          Commencer l&apos;expérience
        </p>
        <ChevronDown className="text-white/70 mx-auto" size={28} />
      </div>
    </section>
  );
}
