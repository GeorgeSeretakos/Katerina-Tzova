import FilmsGrid from "../../components/galleries/FilmsGrid";
import { filmsByCategory } from "../../../data/films";

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(filmsByCategory).map((category) => ({
    category,
  }));
}

export default async function FilmsCategoryPage({ params }) {
  const { category } = await params;

  const items = filmsByCategory[category];

  if (!items) {
    return (
      <div className="text-center text-[#EAEAEA]/70">
        Category not found
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <FilmsGrid items={items} />
    </div>
  );
}
