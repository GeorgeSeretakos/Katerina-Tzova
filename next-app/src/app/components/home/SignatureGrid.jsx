import Image from "next/image";

export default function SignatureGrid({ items = [] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance] border-4">
      {items.map((it, i) => (
        <figure key={i} className="mb-3 break-inside-avoid group">
          {/* Aspect-ratio wrapper enforces varied heights */}
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{aspectRatio: `${it.w} / ${it.h}`}}
          >
            <img
              src={it.src}
              alt={it.alt || ""}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* gold hover frame */}
            <span
              className="pointer-events-none absolute inset-0 rounded-lg border border-transparent group-hover:border-[#D4AF37]/60"/>
            {/* caption */}
            <figcaption
              className="absolute inset-x-0 bottom-0 p-3 text-xs bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
              <span className="px-2 py-0.5 border border-[#D4AF37] rounded-sm mr-2 text-[10px] tracking-wide">
                SIGNATURE
              </span>
              {it.alt}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}