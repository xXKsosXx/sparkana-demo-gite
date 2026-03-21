import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & baseline */}
          <div>
            <p className="font-headline italic text-lg mb-3">
              L&apos;Écrin de la Biche
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Agro-resort intimiste au cœur du Mont Bouquet, Gard.
            </p>
          </div>

          {/* Explorer */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-body font-semibold">
              Explorer
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Hébergements", href: "#hebergements" },
                { label: "Expériences", href: "#experiences" },
                { label: "Tarifs", href: "#contact" },
                { label: "Accès", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-body font-semibold">
              Réseaux
            </h4>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "Pinterest"].map((r) => (
                <li key={r}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Journal / Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-body font-semibold">
              Journal
            </h4>
            <p className="text-sm text-white/60 mb-4">
              Recevez nos récits du Mont Bouquet.
            </p>
            <div className="flex border-b border-white/20">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 py-2 focus:outline-none"
              />
              <button
                className="text-white/60 hover:text-white transition-colors p-2"
                aria-label="S'inscrire"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; 2025 L&apos;Écrin de la Biche · Bouquet, Gard
          </p>
          <p className="text-xs text-white/30">
            Site réalisé par{" "}
            <a
              href="https://sparkana.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white underline"
            >
              sparkana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
