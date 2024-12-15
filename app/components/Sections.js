import SectionCard from "./subcomponents/Sections-Card";

export default function Sections() {
  return (
    <>
      <div className="flex justify-center my-12 lg:my-8">
        <p className="font-bold text-violet-700 lg:text-4xl text-3xl">
          Dai un&apos;occhiata!
        </p>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-16 flex flex-col items-center">
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
