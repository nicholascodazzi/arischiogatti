import Link from "next/link";
import SectionCard from "@/src/features/homepage/components/sections-cards";
import TitleSubtitle from "@/src/components/title-subtitle";

export default function Sections() {
  return (
    <section>
      <TitleSubtitle
        title={"Esplora"}
        subtitle={
          " Scopri tutto ciò che riguarda Arischiogatti e resta sempre aggiornato"
        }
      />

      <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="lg:w-1/6">
          <Link href="/adozioni">
            <SectionCard
              image={"/images/ui/sections/adozioni.svg"}
              title={"Adozioni"}
              description={"Un nuovo amico ti aspetta, vieni a trovarlo!"}
            />
          </Link>
        </div>
        <div className="lg:w-1/6">
          <Link href="#">
            <SectionCard
              image={"/images/ui/sections/comunicazioni.svg"}
              title={"Comunicazioni"}
              description={"Resta sempre aggiornato su iniziative ed eventi!"}
            />
          </Link>
        </div>
        <div className="lg:w-1/6">
          <Link href="#">
            <SectionCard
              image={"/images/ui/sections/smarriti.svg"}
              title={"Smarriti"}
              description={"Ritroviamo i nostri amici insieme!"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
