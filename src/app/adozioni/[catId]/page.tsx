import { getCat } from "@/src/features/adozioni/getCat";
import CatDetail from "@/src/features/adozioni/components/catDetail";

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
