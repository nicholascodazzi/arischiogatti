import SectionCard from "./subcomponents/Sections-Card";

export default function Sections() {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:my-8">
        <p className="font-bold text-violet-800 text-4xl">
          Dai un&apos;occhiata!
        </p>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-16">
        <div className="lg:w-1/6">
          <a href="#">
            <SectionCard
              image={"/images/ui/sections/adozioni.svg"}
              title={"Adozioni"}
              description={"Un nuovo amico ti aspetta, vieni a trovarlo!"}
            />
          </a>
        </div>
        <div className="lg:w-1/6">
          <a href="#">
            <SectionCard
              image={"/images/ui/sections/comunicazioni.svg"}
              title={"Comunicazioni"}
              description={"Resta sempre aggiornato su iniziative ed eventi!"}
            />
          </a>
        </div>
        <div className="lg:w-1/6">
          <a href="#">
            <SectionCard
              image={"/images/ui/sections/smarriti.svg"}
              title={"Smarriti"}
              description={"Ritroviamo i nostri amici insieme!"}
            />
          </a>
        </div>
      </div>
    </>
  );
}
