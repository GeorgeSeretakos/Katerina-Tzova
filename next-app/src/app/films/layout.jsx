"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedPageHeader from "../components/AnimatedPageHeader";

const categories = [
  { slug: "weddings", label: "Weddings" },
  { slug: "baptisms", label: "Baptisms" },
  { slug: "movies", label: "Movies" },
  { slug: "theatre", label: "Theatre" },
  { slug: "advertisement", label: "Advertisement" },
];

export default function FilmsLayout({ children }) {
  const pathname = usePathname();
  const active = pathname.split("/")[2] || "weddings";

  return (
    <section className="min-h-screen bg-[#0B0B0C] text-[#EAEAEA]">
      <AnimatedPageHeader
        title="Films"
        iconSrc="/icons/films.png"
        iconAlt="Delicate hand-drawn sketch"
      />

      <div className="sticky top-0 z-20 bg-[#0B0B0C]/95 backdrop-blur border-t border-b border-[#C6A664]/30">
        <nav className="flex justify-center gap-4 md:gap-6 py-3 text-sm">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/films/${c.slug}`}
              className={`px-3 py-1 rounded-lg transition ${
                active === c.slug
                  ? "bg-[#D4AF37] text-black"
                  : "text-[#EAEAEA]/80 hover:text-[#D4AF37]"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">{children}</div>
    </section>
  );
}
