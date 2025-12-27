import StillsGrid from "../../components/galleries/StillsGrid";
import { stillsByCategory } from "../../../data/stills";

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(stillsByCategory).map((category) => ({
    category,
  }));
}

export default async function StillsCategoryPage({ params }) {
  const { category } = await params;
  const items = stillsByCategory[category];

  console.log("Params: ", params);
  console.log("Category: ", category);
  console.log("Items: ", items);

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
