import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Hebergements from "@/components/Hebergements";
import Chiffres from "@/components/Chiffres";
import Experiences from "@/components/Experiences";
import Avis from "@/components/Avis";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/lib/client";
import {
  HEBERGEMENTS_QUERY,
  AVIS_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let hebergements: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let avis: any[] = [];

  try {
    const results = await Promise.all([
      sanityFetch<unknown[]>(HEBERGEMENTS_QUERY),
      sanityFetch<unknown[]>(AVIS_QUERY),
    ]);
    hebergements = Array.isArray(results[0]) ? results[0] : [];
    avis = Array.isArray(results[1]) ? results[1] : [];
  } catch {
    // Fallback to static data in components
  }

  return (
    <main>
      <Nav />
      <Hero />
      <Hebergements data={hebergements} />
      <Chiffres />
      <Experiences />
      <Avis data={avis} />
      <Contact />
      <Footer />
    </main>
  );
}
