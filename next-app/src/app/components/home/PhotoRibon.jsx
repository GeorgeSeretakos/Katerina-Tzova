export default function PhotoRibbon() {
  const images = [
    { src: "/images/baptisms/18.jpg", alt: "Dance under lights" },
    { src: "/images/weddings/38.jpg", alt: "Theatre scene" },
    { src: "/images/baptisms/68.jpg", alt: "Reception sparkles" },
    { src: "/images/weddings/28.jpg", alt: "Santorini" },
    { src: "/images/baptisms/3.jpg", alt: "Sunset vows" },
    { src: "/images/dance-school/4.jpg", alt: "City bridge silhouette" },
    { src: "/images/weddings/42.jpg", alt: "Wedding moment" },
    { src: "/images/baptisms/7.jpg", alt: "Sunset vows" },
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
