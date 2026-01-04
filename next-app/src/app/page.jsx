import Hero from "../app/components/home/Hero";
import DualEntry from "../app/components/home/DualEntry";
import CategoryShowcase from "./components/home/CategoryShowCase";
import {categories} from "../data/categories";
import MiniBio from "../app/components/home/MiniBio";


export default function HomePage() {
  return (
    <main className="bg-[#0B0B0C] text-[#EAEAEA]">
      <Hero
        images={[
          "/images/weddings/40.jpg",
          "/images/baptisms/46.jpg",
          "/images/portraits/13.jpg",
          "/images/portraits/7.jpg",
          "/images/films-and-theatre/20.jpg",
          "/images/advertisement/18.jpg",
          "/images/advertisement/23.jpg",
        ]}
        logoSrc="/logo/white(1).png"
        autoPlay={true}
      />
      {/* Choose variant: "boxed" (yours) or "full" (mine with blur) */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <DualEntry
          variant="boxed"
          stills={{src: "/images/weddings/45.jpg", alt: "Stills cover"}}
          films={{src: "/images/weddings/1000.jpg", alt: "Films cover"}}
        />
      </section>

      <section className="mx-auto">
        <CategoryShowcase categories={categories}/>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <MiniBio/>
      </section>

    </main>
  );
}
