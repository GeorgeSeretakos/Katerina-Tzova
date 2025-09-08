import Hero from "../app/components/home/Hero";
import DualEntry from "../app/components/home/DualEntry";
import CategoryShowcase from "./components/home/CategoryShowCase";
import {categories} from "../../public/data/categories";
import MiniBio from "../app/components/home/MiniBio";


export default function HomePage() {
  return (
    <main className="bg-[#0B0B0C] text-[#EAEAEA]">
      <Hero
        images={[
          "/images/weddings/40.jpg",
          "/images/baptisms/60.jpg",
          "/images/portraits/1.jpg",
          "/images/theatre/1.jpg",
          "/images/food-and-jewellery/4.jpg",
          "/images/dance-school/7.jpg",
          // "/images/weddings/.jpg",
          // "/images/theatre/.jpg",
          // "/images/baptisms/.jpg",
        ]}
        logoSrc="/logo/white.png"
        autoPlay={true}
        intervalMs={5500}
      />
      {/* Choose variant: "boxed" (yours) or "full" (mine with blur) */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <DualEntry
          variant="boxed"
          stills={{src: "/images/weddings/45.jpg", alt: "Stills cover"}}
          films={{src: "/images/weddings/32.jpg", alt: "Films cover"}}
        />
      </section>

      <section className="mx-auto">
        <CategoryShowcase categories={categories}/>
      </section>

      {/*<section className="max-w-6xl mx-auto px-4 py-10 border-4">*/}
      {/*  <TrustStrip items={trustLogos}/>*/}
      {/*</section>*/}

      <section className="max-w-3xl mx-auto px-4 py-16">
        <MiniBio/>
      </section>

    </main>
  );
}
