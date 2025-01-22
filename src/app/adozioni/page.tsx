import { getCats } from "@/src/data/cats/queries";
import Adoptions from "../../components/Adoptions";

export default async function AdozioniPage() {
  const data = await getCats();
  return <Adoptions cats={data} />;
}
