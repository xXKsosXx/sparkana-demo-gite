"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useFadeIn } from "./useFadeIn";

export default function Contact() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ nom: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-section grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4 font-body">
              Nous contacter
            </p>
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-10">
              Commencez votre voyage
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="NOM COMPLET"
                  required
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full bg-transparent border-b border-outline-variant py-3 text-sm placeholder:text-on-surface-variant/50 placeholder:text-xs placeholder:tracking-widest focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-outline-variant py-3 text-sm placeholder:text-on-surface-variant/50 placeholder:text-xs placeholder:tracking-widest focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-outline-variant py-3 text-sm placeholder:text-on-surface-variant/50 placeholder:text-xs placeholder:tracking-widest focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-white text-sm font-semibold py-4 rounded hover:bg-primary-container transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={16} />
                {status === "sending"
                  ? "Envoi en cours..."
                  : "Demander une réservation"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-primary text-center">
                  Votre demande a bien été envoyée. Nous vous répondrons sous 24h.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 text-center">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>

          {/* Map & Info */}
          <div className="space-y-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/Mont Bouquet.png"
                alt="Vue du Mont Bouquet, Gard"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-primary">
                    2500 route de Mas Ravin
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    30440 Bouquet, Gard, France
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:bonjour@ecrindlabiche.fr"
                  className="text-sm text-on-surface-variant hover:text-primary"
                >
                  bonjour@ecrindlabiche.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href="tel:+33466000000"
                  className="text-sm text-on-surface-variant hover:text-primary"
                >
                  +33 4 66 00 00 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
