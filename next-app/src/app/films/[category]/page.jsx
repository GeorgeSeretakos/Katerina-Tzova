import { notFound } from "next/navigation";
import FilmsGrid from "../../components/galleries/FilmsGrid";
import { filmsByCategory } from "../../../../public/data/films"; // your data map

export default async function FilmsCategoryPage({ params }) {
  const { category } = await params;
  const items = filmsByCategory[category];
  if (!items) return notFound();

  return (
    <div className="space-y-6">
      {/*<h2 className="text-xl md:text-2xl capitalize">{category}</h2>*/}
      <FilmsGrid items={items} />
    </div>
  );
}
