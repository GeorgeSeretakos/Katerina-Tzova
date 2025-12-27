import { notFound } from "next/navigation";
import StillsGrid from "../../components/galleries/StillsGrid";
import { stillsByCategory } from "../../../../public/data/stills";

export default function StillsCategoryPage({ params }) {
  const { category } = params;
  const items = stillsByCategory[category];
  if (!items) return notFound();

  return (
    <div className="space-y-6">
      {/*<h2 className="text-xl md:text-2xl">{pretty[category] ?? category}</h2>*/}
      <StillsGrid items={items} />
    </div>
  );
}
