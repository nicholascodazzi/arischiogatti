import { getCats } from "@/src/data/cats/getCats";
import Adoptions from "../../components/Adoptions/Adoptions";

export default async function AdozioniPage() {
  const data = await getCats();
  return <Adoptions cats={data} />;
}
