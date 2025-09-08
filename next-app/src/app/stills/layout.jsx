"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const categories = [
  { slug: "weddings",           label: "Weddings" },
  { slug: "baptisms",           label: "Baptisms" },
  { slug: "portraits",          label: "Portraits" },
  { slug: "theatre",            label: "Theatre" },
  { slug: "food-and-jewellery", label: "Food & Jewellery" },
  { slug: "dance-school",       label: "Dance School" },
];

export default function StillsLayout({ children }) {
  const pathname = usePathname();
  const active = pathname.split("/")[2] || "weddings";

  return (
    <section className="min-h-screen bg-[#0B0B0C] text-[#EAEAEA]">
      <div className="py-10">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-3xl md:text-4xl font-serif">Stills</h1>
          <img
            src="/icons/images.png"
            alt="Delicate hand-drawn sketch"
            width={64}
            height={64}
            className="opacity-80"
          />
        </div>
      </div>


      <div className="sticky top-0 z-20 bg-[#0B0B0C]/95 backdrop-blur border-t border-b border-[#C6A664]/30">
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 py-3 text-sm">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/stills/${c.slug}`}
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
