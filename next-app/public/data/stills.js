// data/stills.js

// --- Pretty titles (match route slugs exactly) ---
export const prettyTitles = {
  weddings: "Weddings",
  baptisms: "Baptisms",
  portraits: "Portraits",
  theatre: "Theatre",
  "food-and-jewellery": "Food & Jewellery",
  "dance-school": "Dance School",
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
  portraits:            makeItems("portraits", 6, "jpg"),
  theatre:              makeItems("theatre", 5, "jpg"),
  "food-and-jewellery": makeItems("food-and-jewellery", 14, "webp"),
  "dance-school":       makeItems("dance-school", 8, "webp"),
};
