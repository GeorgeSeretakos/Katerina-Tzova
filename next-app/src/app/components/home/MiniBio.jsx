import Image from "next/image";

export default function MiniBio() {
  return (
    <section className="relative text-center md:text-left">
      {/* Sketch (gold, delicate) */}
      <div className="flex justify-center md:justify-start mb-5">
        <img
          src="/icons/camera.png"
          alt="Delicate hand-drawn sketch"
          width={84}
          height={84}
          className="opacity-80"
        />
      </div>

      {/* tiny gold divider */}
      <span aria-hidden className="inline-block w-14 h-[2px] bg-[#D4AF37] mb-4"/>

      <h3 className="text-2xl md:text-3xl">About Katerina</h3>

      <p className="mt-3 text-sm md:text-base text-[#EAEAEA]/85 max-w-2xl">
        Katerina Tzova is a Greece-based photographer and filmmaker crafting
        intimate stories with cinematic light and presence. Trained in
        Photography &amp; Audiovisual Arts at PADA Athens (with Erasmus studies
        in Florence) and holding an MA in Culture &amp; Documentary Film
        Production from the University of the Aegean, her work spans weddings,
        baptisms, portraits, theatre and documentaries—including her debut film <em>APOLIS</em>.
      </p>

      <div className="mt-6">
        <a href="/about" className="btn-gold" aria-label="Read Katerina Tzova’s full biography">
          Read full bio
        </a>
      </div>
    </section>
  );
}
