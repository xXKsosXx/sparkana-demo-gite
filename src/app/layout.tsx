import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import ForestSound from "@/components/ForestSound";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["400", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "L'Écrin de la Biche | Agro-resort intimiste à Bouquet, Gard",
  description:
    "Tiny houses, cabane dans les arbres et kerterre au cœur du Mont Bouquet. Safran, truffes, forêt de cèdres centenaires. Un agro-resort unique dans le Gard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="font-body antialiased bg-background text-on-surface">
        {children}
        <ForestSound />
      </body>
    </html>
  );
}
