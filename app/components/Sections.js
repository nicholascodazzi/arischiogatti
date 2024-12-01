import SectionCard from "./subcomponents/Sections-Card";

export default function Sections() {
  return (
    <div className="w-full h-max flex justify-center items-center gap-10 mt-10 px-16">
      <div className="w-3/12 bg-violet-300 border-2  border-black py-8 px-16 rounded-3xl hover:cursor-pointer hover:scale-105 hover:transition-all">
        <SectionCard
          image={"/images/ui/sections/adozioni.jpg"}
          title={"Adozioni"}
          description={"Un nuovo amico ti aspetta, Vieni a trovarlo!"}
        />
      </div>
      <div className="w-3/12 bg-violet-300 border-2  border-black py-8 px-16 rounded-3xl hover:cursor-pointer hover:scale-105 hover:transition-all">
        <SectionCard
          image={"/images/ui/sections/adozioni.jpg"}
          title={"Comunicazioni"}
          description={
            "Resta aggiornato/a su tutte le nostre iniziative ed eventi"
          }
        />
      </div>
      <div className="w-3/12 bg-violet-300 border-2  border-black py-8 px-16 rounded-3xl hover:cursor-pointer hover:scale-105 hover:transition-all">
        <SectionCard
          image={"/images/ui/sections/adozioni.jpg"}
          title={"Smarriti"}
          description={"Aiutaci a ritrovare i nostri amici smarriti"}
        />
      </div>
    </div>
  );
}
