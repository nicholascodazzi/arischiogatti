import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CatListCardProps } from "../types";

export default function CatList({ id, image, name, sex }: CatListCardProps) {
  return (
    <div className="h-auto max-w-96 rounded-xl bg-violet-400">
      <div className="flex flex-col">
        <div className="overflow-hidden rounded-t-md">
          <Image
            src={"/images/ui/adoptions/" + image}
            width={10000}
            height={10000}
            alt=""
          />
        </div>
        <div className="flex justify-center pt-2 text-xl font-bold md:text-2xl">
          <div className="flex items-center">
            <p className="capitalize">
              {name}
              <FontAwesomeIcon
                icon={sex == "M" ? faMars : faVenus}
                color={sex == "M" ? "blue" : "magenta"}
                width={30}
                className="ml-2 text-2xl md:text-3xl"
              />
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center gap-4 p-4 text-sm md:text-base">
          <Link href={`adozioni/${id}`}>
            <button className="rounded-xl bg-violet-600 p-2 font-bold hover:bg-violet-800">
              Dettagli
            </button>
          </Link>
          <button className="rounded-xl bg-violet-600 p-2 font-bold hover:bg-violet-800">
            Vieni a conoscermi!
          </button>
        </div>
      </div>
    </div>
  );
}
