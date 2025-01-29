import { getCat } from "@/src/data/cats/getCat";
import CatDetail from "../../../components/Adoptions/CatDetail";

export default async function CatDetailPage({
  params,
}: {
  params: Promise<{
    catId: string;
    // [key: string]: string | string[] | undefined;
  }>;
}) {
  const id = (await params).catId;
  const data = await getCat(id);
  return <CatDetail catData={data} />;
}
