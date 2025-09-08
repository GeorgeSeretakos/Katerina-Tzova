import Image from "next/image";

export default function TrustStrip({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="border-t border-[#C6A664]/30 py-8">
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
        {items.map((it, i) => (
          <img
            key={i}
            src={it.src}
            alt={it.alt || ""}
            width={120}
            height={40}
          />
        ))}
      </div>
    </div>
  );
}
