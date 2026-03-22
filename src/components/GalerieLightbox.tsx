"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  src: string;
  titre: string;
  alt?: string;
}

interface Props {
  photos: Photo[];
}

export default function GalerieLightbox({ photos }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % photos.length);
  }, [activeIndex, photos.length]);

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  }, [activeIndex, photos.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, next, prev]);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      {/* Grid galerie cliquable */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden cursor-pointer group rounded-lg"
            onClick={() => setActiveIndex(i)}
          >
            <Image
              src={photo.src}
              alt={photo.alt || photo.titre}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-end p-4">
              <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                {photo.titre}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            onClick={() => setActiveIndex(null)}
            aria-label="Fermer"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10 bg-white/10 p-3 backdrop-blur-sm rounded"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Photo précédente"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].titre}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
              <p className="text-white text-sm tracking-widest uppercase font-medium">
                {photos[activeIndex].titre}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {activeIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10 bg-white/10 p-3 backdrop-blur-sm rounded"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Photo suivante"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-white w-4"
                    : "bg-white/30 w-1.5"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(i);
                }}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
