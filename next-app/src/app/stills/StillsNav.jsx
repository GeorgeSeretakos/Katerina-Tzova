"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { slug: "weddings", label: "Weddings" },
  { slug: "baptisms", label: "Baptisms" },
  { slug: "films-and-theatre", label: "Films & Theatre" },
  { slug: "advertisement", label: "Advertisement" },
];

export default function StillsNav() {
  const pathname = usePathname();
  const active = pathname.split("/")[2] || "weddings";

  return (
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
  );
}
