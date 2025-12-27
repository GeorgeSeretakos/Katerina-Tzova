// --- Pretty titles (match route slugs exactly) ---
export const prettyTitles = {
  weddings: "Weddings",
  baptisms: "Baptisms",
  "films-and-theatre": "Films & Theatre",
  "advertisement": "Advertisement"
};

// Simple helper to build N items for a category.
function makeItems(cat, count = 20, ext = "jpg") {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      src: `/images/${cat}/${n}.${ext}`, // CHANGED: added /stills/
      alt: `${toPretty(cat)} — image ${n}`,
      category: cat,
    };
  });
}

const toPretty = (slug) =>
  prettyTitles[slug] ??
  slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// --- Exported data map (keys MUST match route slugs) ---
export const stillsByCategory = {
  weddings:             makeItems("weddings", 52, "webp"),
  baptisms:             makeItems("baptisms", 76, "webp"),
  "films-and-theatre":  makeItems("films-and-theatre", 5, "jpg"),
  advertisement:        makeItems("advertisement", 33, "jpg"),
};
