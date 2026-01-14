// stills/[category]/page.jsx
import StillsGrid from "../../components/galleries/StillsGrid";
import { stillsByCategory } from "../../../data/stills";
import CategoryNotFound from "../../components/CategoryNotFound";

export function generateStaticParams() {
  try {
    if (!stillsByCategory || typeof stillsByCategory !== 'object') {
      return [];
    }

    const categories = Object.keys(stillsByCategory);
    return categories.map((category) => ({
      category,
    }));
  } catch (error) {
    return [];
  }
}

export default async function StillsCategoryPage({ params }) {
  try {
    const { category } = await params;

    if (!stillsByCategory || !category) {
      return <CategoryNotFound />;
    }

    const items = stillsByCategory[category];

    if (!items) return <CategoryNotFound />;

    return (
      <div className="space-y-6">
        <StillsGrid items={items} />
      </div>
    );

  } catch (error) {
    return <CategoryNotFound />;
  }
}