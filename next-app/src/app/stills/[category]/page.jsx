import { notFound } from "next/navigation";
import StillsGrid from "../../components/galleries/StillsGrid";
import { stillsByCategory } from "../../../../public/data/stills";

export default async function StillsCategoryPage({ params }) {
  const { category } = await params;
  const items = stillsByCategory[category];
  if (!items) {
    return (
      <div className="text-center text-[#EAEAEA]/70">
        Category not found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StillsGrid items={items} />
    </div>
  );
}
