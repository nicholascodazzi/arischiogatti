import { getCat } from "@/src/features/adozioni/queries/get-cat";
import CatDetail from "@/src/features/adozioni/components/catDetail";

export default async function CatDetailPage({
  params,
}: {
  params: Promise<{
    catId: string;
  }>;
}) {
  const id = (await params).catId;
  const data = await getCat(id);
  return <CatDetail catData={data} />;
}
