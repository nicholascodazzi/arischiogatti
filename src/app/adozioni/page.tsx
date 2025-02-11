import { getCats } from "@/src/features/adozioni/queries/get-cats";
import Adoptions from "@/src/features/adozioni/components/adoptions";

export default async function AdozioniPage() {
  const data = await getCats();
  return <Adoptions cats={data} />;
}