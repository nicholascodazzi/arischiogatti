import { getSingleCat } from "@/src/data/cats/queries";
import CatDetail from "../../../components/Adoptions/CatDetail";

export default async function CatDetailPage({
  searchParams,
}: {
  searchParams: Promise<{
    id: string;
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const catId = (await searchParams).id;
  const data = await getSingleCat(catId);
  return <CatDetail catData={data} />;
}
