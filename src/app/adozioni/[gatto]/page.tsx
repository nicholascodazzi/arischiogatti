import { getSingleCat } from "@/src/data/cats/queries";
import CatDetail from "../../../components/CatDetail";

export default async function CatDetailPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  // console.log("Params received:", searchParams); // Debugging line
  const catId = await searchParams.id;
  const data = await getSingleCat(catId);
  return <CatDetail catData={data} />;
}
