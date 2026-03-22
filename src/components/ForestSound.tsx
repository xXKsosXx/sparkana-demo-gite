"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function ForestSound() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src="https://assets.mixkit.co/sfx/preview/mixkit-forest-ambience-1186.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div
        className={`fixed bottom-24 right-6 z-50 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={toggle}
          className="group flex items-center gap-3 bg-primary/80 backdrop-blur-md border border-primary-container text-white px-4 py-3 hover:bg-primary transition-all shadow-lg rounded"
          aria-label={playing ? "Couper le son" : "Écouter la forêt"}
        >
          {playing ? (
            <Volume2 size={16} className="animate-pulse" />
          ) : (
            <VolumeX size={16} />
          )}
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/70 group-hover:text-white transition-colors hidden sm:block">
            {playing ? "Couper le son" : "Écouter la forêt"}
          </span>

          {playing && (
            <div className="flex items-center gap-0.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-0.5 bg-white rounded-full animate-bounce"
                  style={{
                    height: `${8 + i * 4}px`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: "0.8s",
                  }}
                />
              ))}
            </div>
          )}
        </button>
      </div>
    </>
  );
}
