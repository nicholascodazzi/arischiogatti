import { getCats } from "@/src/features/adozioni/getCats";
import Adoptions from "@/src/features/adozioni/components/adoptions";

export default async function AdozioniPage() {
  const data = await getCats();
  return <Adoptions cats={data} />;
}