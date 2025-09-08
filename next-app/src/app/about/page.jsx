"use client";
import { useState } from "react";
import {
  Camera,
  Clapperboard,
  Images,
  Scissors,
  GraduationCap,
} from "lucide-react";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#0B0B0C] text-[#EAEAEA]">
      {/* Title + Icon */}
      <div className="py-10">
        <div className="flex items-center justify-center gap-4">
          <h1 className="font-great-vibes !font-normal">About</h1>
          <img
            src="/icons/about.png"
            alt="Delicate hand-drawn sketch"
            width={64}
            height={64}
            className="opacity-80"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#C6A664]/30">
              <img
                src="/images/katerina/1.jpg"
                alt="Katerina Tzova portrait"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Intro */}
          <div className="space-y-4">
            <h2 className="font-serif">Katerina Tzova</h2>
            <p className="text-[#EAEAEA]/80">
              Cinematographer & Photographer based in Greece. Documentary-minded
              visuals for weddings, baptisms, theatre, and real stories.
            </p>

            <p className="text-[#EAEAEA]/80">
              Born in Corinth (1984). Studied Photography & Audiovisual Arts in
              Athens (ATEI—now University of West Attica) with ERASMUS at the
              Università degli Studi di Firenze (grad. 2009). Postgraduate
              studies at the University of the Aegean in{" "}
              <span className="italic">
                Culture and Documentary Film Production
              </span>
              .
            </p>

            {/* Read more (expandable) */}
            <button onClick={() => setOpen((v) => !v)} className="btn-gold">
              {open ? "Hide full story" : "Read full story"}
            </button>

            {open && (
              <div className="pt-3 text-sm leading-relaxed text-[#EAEAEA]/80">
                I began with video art and soon turned to documentary. A spark
                from my Constantinopolitan roots—recording family memories—
                became <span className="font-medium">APOLIS</span>, my first
                documentary. Since 2002 I’ve worked at FOTO VICTOR (Neapoli
                Exarcheion), photographed interiors for a decor magazine, and
                created trailers for theatre. I work as a cinematographer for
                weddings, baptisms, and events; have served as a script
                supervisor for TV series; taught photography and the language of
                cinema to teens and adults; directed the stage piece{" "}
                <span className="font-medium">“The Fish’s Gaze”</span> about a
                river in Argolida under municipal pressure; and contributed as
                photographer & editor to{" "}
                <span className="font-medium">Dimitris Mouzakitis’ “01”</span>{" "}
                (2024).
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

        {/* What I Do (Cards with icons) */}
        <div className="space-y-4">
          <h3 className="font-serif">What I Do</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

            {/* Weddings & Baptisms */}
            <div className="group rounded-2xl border border-[#C6A664]/30 hover:border-[#D4AF37] transition p-5 bg-[#121214]">
              <div className="flex items-center gap-3">
                <Clapperboard className="h-5 w-5 text-[#D4AF37]" aria-hidden />
                <div className="font-medium">Weddings & Baptisms</div>
              </div>
              <p className="mt-2 text-[#EAEAEA]/80">
                Discreet, documentary-minded coverage that honors feeling.
              </p>
            </div>

            {/* Theatre & Events */}
            <div className="group rounded-2xl border border-[#C6A664]/30 hover:border-[#D4AF37] transition p-5 bg-[#121214]">
              <div className="flex items-center gap-3">
                <Images className="h-5 w-5 text-[#D4AF37]" aria-hidden />
                <div className="font-medium">Theatre & Events</div>
              </div>
              <p className="mt-2 text-[#EAEAEA]/80">
                Trailers, backstage, and performances with atmosphere.
              </p>
            </div>

            {/* Photography */}
            <div className="group rounded-2xl border border-[#C6A664]/30 hover:border-[#D4AF37] transition p-5 bg-[#121214]">
              <div className="flex items-center gap-3">
                <Camera className="h-5 w-5 text-[#D4AF37]" aria-hidden />
                <div className="font-medium">Photography</div>
              </div>
              <p className="mt-2 text-[#EAEAEA]/80">
                People, theatre, and select editorial with elegant detail.
              </p>
            </div>

            {/* Editing */}
            <div className="group rounded-2xl border border-[#C6A664]/30 hover:border-[#D4AF37] transition p-5 bg-[#121214]">
              <div className="flex items-center gap-3">
                <Scissors className="h-5 w-5 text-[#D4AF37]" aria-hidden />
                <div className="font-medium">Editing</div>
              </div>
              <p className="mt-2 text-[#EAEAEA]/80">
                Narrative pacing for shorts and features.
              </p>
            </div>

            {/* Teaching */}
            <div className="group rounded-2xl border border-[#C6A664]/30 hover:border-[#D4AF37] transition p-5 bg-[#121214]">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-[#D4AF37]" aria-hidden />
                <div className="font-medium">Teaching</div>
              </div>
              <p className="mt-2 text-[#EAEAEA]/80">
                Workshops on photography and the language of cinema.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

        {/* Roots & Education */}
        <div className="space-y-4">
          <h3 className="font-serif">Roots & Education</h3>
          <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
            <li>
              <span className="font-semibold">Origins:</span> Corinth (1984);
              Constantinopolitan & Peloponnesian family
            </li>
            <li>
              ATEI Athens (now UniWA), Photography & Audiovisual Arts — 2009
            </li>
            <li>
              <span className="font-semibold">ERASMUS:</span> Università degli
              Studi di Firenze
            </li>
            <li>
              <span className="font-semibold">M.A.:</span> University of the
              Aegean — Culture & Documentary Film Production
            </li>
            <li>Seminars in documentary & cinematography</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

        {/* Selected Projects */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif">Selected Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "APOLIS",
                desc:
                  "Debut documentary rooted in Constantinopolitan family histories.",
              },
              {
                title: "The Fish’s Gaze",
                desc:
                  "Theatre direction; a reflection on a river in Argolida under municipal pressure.",
              },
              {
                title: "01 (2024, dir. Dimitris Mouzakitis)",
                desc: "Photographer & editor.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[#C6A664]/30 p-5 hover:border-[#D4AF37] transition"
              >
                <div className="font-medium">{p.title}</div>
                <p className="mt-2 text-[#EAEAEA]/80">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

        {/* CTA */}
        <div className="rounded-2xl p-4 md:p-8 text-center">
          <h1 className="font-great-vibes !font-normal">
            Let’s talk about your story
          </h1>
        </div>
      </div>
    </section>
  );
}