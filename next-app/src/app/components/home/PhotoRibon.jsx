export default function PhotoRibbon() {
  const images = [
    { src: "/images/weddings/42.jpg", alt: "Dance under lights" },

    { src: "/images/films-and-theatre/8.jpg", alt: "Theatre scene" },
    { src: "/images/baptisms/33.jpg", alt: "Reception sparkles" },
    { src: "/images/films-and-theatre/100.jpg", alt: "Santorini" },
    { src: "/images/portraits/4.jpg", alt: "Sunset vows" },
    { src: "/images/advertisement/21.jpg", alt: "City bridge silhouette" },
    { src: "/images/weddings/1002.jpg", alt: "Wedding moment" },

    { src: "/images/portraits/15.jpg", alt: "Dance under lights" },
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
