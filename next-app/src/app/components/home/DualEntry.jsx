import Link from "next/link";
import Image from "next/image";

export default function DualEntry({ variant = "boxed", stills, films }) {
  if (variant === "boxed") {
    // Boxed version: larger image preview (responsive height)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* STILLS */}
        <Link
          href="/stills"
          className="group border border-[#C6A664]/40 rounded-xl p-8 bg-[#121214] hover:border-[#D4AF37] transition"
        >
          <h2 className="text-2xl md:text-3xl">Stills</h2>
          <p className="mt-2 text-sm text-[#EAEAEA]/70">
            Φωτογραφικά στιγμιότυπα από γάμους, βαπτίσεις, θέατρο, κινηματογράφο & πορτρέτα.
          </p>
          <div className="mt-6 h-48 md:h-64 lg:h-80 rounded-md overflow-hidden relative">
            {stills?.src ? (
              <img
                src={stills.src}
                alt={stills.alt || "Stills cover"}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-black/30"/>
            )}
          </div>
        </Link>

        {/* FILMS */}
        <Link
          href="/films"
          className="group border border-[#C6A664]/40 rounded-xl p-8 bg-[#121214] hover:border-[#D4AF37] transition"
        >
          <h2 className="text-2xl md:text-3xl">Films</h2>
          <p className="mt-2 text-sm text-[#EAEAEA]/70">
            Επιλεγμένα βίντεο με κινηματογραφική προσέγγιση και έμφαση στο συναίσθημα.
          </p>
          <div className="mt-6 h-48 md:h-64 lg:h-80 rounded-md overflow-hidden relative">
            {films?.src ? (
              <img
                src={films.src}
                alt={films.alt || "Films cover"}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-black/30"/>
            )}
          </div>
        </Link>
      </div>
    );
  }

  // Full-bleed version: taller cards (responsive height)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* STILLS */}
      <Link
        href="/stills"
        className="group border border-[#C6A664]/40 rounded-xl p-0 bg-[#121214] hover:border-[#D4AF37] transition overflow-hidden relative h-72 md:h-80 lg:h-96"
      >
        {stills?.src && (
          <img
            src={stills.src}
            alt={stills.alt || "Stills cover"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] group-hover:bg-black/30 transition"/>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl md:text-3xl">Stills</h2>
          <p className="mt-2 text-sm text-[#EAEAEA]/85 max-w-xs">
            Φωτογραφικά στιγμιότυπα από γάμους, βαπτίσεις, θέατρο, κινηματογράφο & πορτρέτα.
          </p>
        </div>
      </Link>

      {/* FILMS */}
      <Link
        href="/films"
        className="group border border-[#C6A664]/40 rounded-xl p-0 bg-[#121214] hover:border-[#D4AF37] transition overflow-hidden relative h-72 md:h-80 lg:h-96"
      >
        {films?.src && (
          <img
            src={films.src}
            alt={films.alt || "Films cover"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] group-hover:bg-black/30 transition"/>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-2xl md:text-3xl">Films</h2>
          <p className="mt-2 text-sm text-[#EAEAEA]/85 max-w-xs">
            Επιλεγμένα βίντεο με κινηματογραφική προσέγγιση και έμφαση στο συναίσθημα.
          </p>
        </div>
      </Link>
    </div>
  );
}
