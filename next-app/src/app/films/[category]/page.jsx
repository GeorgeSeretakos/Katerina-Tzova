// films/[category]/page.jsx
import FilmsGrid from "../../components/galleries/FilmsGrid";
import { filmsByCategory } from "../../../data/films";
import CategoryNotFound from "../../components/CategoryNotFound";

export function generateStaticParams() {
  try {
    if (!filmsByCategory || typeof filmsByCategory !== 'object') {
      return [];
    }

    const categories = Object.keys(filmsByCategory);
    return categories.map((category) => ({
      category,
    }));
  } catch (error) {
    return [];
  }
}

export default async function FilmsCategoryPage({ params }) {
  try {
    const { category } = await params;

    if (!filmsByCategory || !category) {
      return <CategoryNotFound />;
    }

    const items = filmsByCategory[category];

    if (!items) return <CategoryNotFound />;

    return (
      <div className="space-y-6">
        <FilmsGrid items={items} />
      </div>
    );
  } catch (error) {
    return <CategoryNotFound />;
  }
}