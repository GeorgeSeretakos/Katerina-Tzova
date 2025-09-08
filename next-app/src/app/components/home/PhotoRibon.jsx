export default function PhotoRibbon() {
  const images = [
    { src: "/images/baptisms/18.webp", alt: "Dance under lights" },
    { src: "/images/weddings/38.webp", alt: "Theatre scene" },
    { src: "/images/baptisms/68.webp", alt: "Reception sparkles" },
    { src: "/images/weddings/28.webp", alt: "Santorini" },
    { src: "/images/baptisms/3.webp", alt: "Sunset vows" },
    { src: "/images/dance-school/4.webp", alt: "City bridge silhouette" },
    { src: "/images/weddings/42.webp", alt: "Wedding moment" },
    { src: "/images/baptisms/7.webp", alt: "Sunset vows" },
  ];

  return (
    <div className="w-full">
      {/* Desktop: 8 columns in 1 row, Mobile: 4 columns in 2 rows */}
      <div className="grid grid-cols-4 md:grid-cols-8 w-full gap-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
