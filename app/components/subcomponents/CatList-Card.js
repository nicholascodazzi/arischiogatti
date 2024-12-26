import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
export default function CatListCard({ id, image, name, sex }) {
  return (
    <div className="bg-violet-400 lg:h-96 lg:min-w-96 lg:max-w-96 lg:rounded-xl">
      <div className="lg:flex lg:flex-col">
        <div className="lg:overflow-hidden lg:rounded-t-xl">
          <Image
            src={"/images/ui/adoptions/" + image}
            width={10000}
            height={10000}
            alt=""
          />
        </div>
        <div className="font-bold lg:flex lg:justify-center lg:p-4 lg:text-2xl">
          <div className="lg:flex lg:items-center">
            <p>
              {name}
              <FontAwesomeIcon
                icon={sex == "M" ? faMars : faVenus}
                color={sex == "M" ? "blue" : "magenta"}
                width={30}
                className="ml-2 text-3xl"
              />
            </p>
          </div>
          <div></div>
        </div>
        <div className="lg:flex lg:justify-center lg:gap-4">
          <a href={`/adozioni/` + name + `?id=` + id}>
            <button className="bg-violet-600 font-bold hover:bg-violet-800 lg:rounded-xl lg:p-2">
              Dettagli
            </button>
          </a>
          <button className="bg-violet-600 font-bold hover:bg-violet-800 lg:rounded-xl lg:p-2">
            Vieni a conoscermi!
          </button>
        </div>
      </div>
    </div>
  );
}
