"use client";

import { useEffect, useState } from "react";

export default function DisponibiliteBadge() {
  const [dispo, setDispo] = useState({
    count: 2,
    label: "",
    urgent: false,
  });

  useEffect(() => {
    const day = new Date().getDay();

    if (day === 4 || day === 5) {
      setDispo({ count: 1, label: "ce week-end", urgent: true });
    } else if (day === 6 || day === 0) {
      setDispo({ count: 2, label: "la semaine prochaine", urgent: false });
    } else if (day === 1) {
      setDispo({ count: 3, label: "ce week-end", urgent: false });
    } else {
      setDispo({ count: 2, label: "ce week-end", urgent: false });
    }
  }, []);

  if (!dispo.label) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase font-medium rounded-full ${
        dispo.urgent
          ? "bg-red-900/20 border border-red-400/30 text-red-200"
          : "bg-white/10 border border-white/30 text-white/90"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            dispo.urgent ? "bg-red-400" : "bg-white"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            dispo.urgent ? "bg-red-400" : "bg-white"
          }`}
        />
      </span>
      {dispo.count} hébergement{dispo.count > 1 ? "s" : ""} disponible
      {dispo.count > 1 ? "s" : ""} {dispo.label}
    </div>
  );
}
