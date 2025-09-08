import Image from "next/image";
import Link from "next/link";

export default function CategoryShowcase({ categories = [] }) {
  return (
    <div className="flex flex-col">
      {categories.map((cat, i) => (
        <div
          key={cat.slug}
          className={`grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[400px]`}
        >
          {/* alternate image/text sides */}
          <div className={`relative ${i % 2 === 0 ? "" : "md:order-2"}`}>
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div
            className={`flex flex-col justify-center items-start p-10 bg-[#0B0B0C] ${
              i % 2 === 0 ? "" : "md:order-1"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-4">{cat.title}</h2>
            <p className="text-sm md:text-base text-[#EAEAEA]/80 mb-6">
              {cat.description}
            </p>
            <Link href={cat.href} className="btn-gold">
              View Gallery
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
