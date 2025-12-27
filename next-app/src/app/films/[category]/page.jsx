import { notFound } from "next/navigation";
import FilmsGrid from "../../components/galleries/FilmsGrid";
import { filmsByCategory } from "../../../data/films";

export default async function FilmsCategoryPage({ params }) {
  const { category } = await params;
  const items = filmsByCategory[category];
  if (!items) return notFound();

  return (
    <div className="space-y-6">
      <FilmsGrid items={items} />
    </div>
  );
}
