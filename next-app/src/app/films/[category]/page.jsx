import FilmsGrid from "../../components/galleries/FilmsGrid";
import { filmsByCategory } from "../../../data/films";
import CategoryNotFound from "../../components/CategoryNotFound";

export function generateStaticParams() {
  return Object.keys(filmsByCategory).map((category) => ({
    category,
  }));
}

export default async function FilmsCategoryPage({ params }) {
  const { category } = await params;
  const items = filmsByCategory[category];

  if (!items) return <CategoryNotFound />;

  return (
    <div className="space-y-6">
      <FilmsGrid items={items} />
    </div>
  );
}
