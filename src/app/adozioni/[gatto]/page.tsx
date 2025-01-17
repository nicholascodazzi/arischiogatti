"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faCakeCandles,
  faVirusSlash,
  faSyringe,
  faDna,
  faHouse,
  faPaw,
  faBookOpen,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import Moment from "moment";
export default function CatDetail() {
  Moment.locale("it");
  const [catData, setCatData] = useState([]);

  const searchParams = useSearchParams();
  const catId = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/cats/" + catId);
      const data = await response.json();
      // console.log(data.rows)
      setCatData(data);
      // console.log(catData);
    };

    fetchData();
  }, []);

  return catData ? (
    <div className="flex justify-center">
      <div className="mx-4 my-8 rounded-xl bg-violet-400 p-6 sm:mx-0 sm:w-2/3 lg:my-8 lg:p-4 xl:w-1/2">
        <div className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          <p className="capitalize">{catData.name}</p>
        </div>
        <div className="lg:mt-4 lg:flex">
          <div className="w-full lg:w-3/5">
            <Image
              src={"/images/ui/adoptions/" + catData.image}
              width={10000}
              height={10000}
              alt=""
              className="lg:rounded-xl"
            />
          </div>
          <div className="my-4 flex flex-col gap-4 lg:my-0 lg:ml-4 lg:justify-between lg:gap-0">
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={catData.sex == "M" ? faMars : faVenus}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{catData.sex == "M" ? "Maschio" : "Femmina"}</p>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faDna}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{catData.race}</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faCakeCandles}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{Moment(catData.birthday).format("D-MM-YYYY")}</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faSyringe}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>
                {catData.sterilized == 1 ? "Sterilizzato" : "Non Sterilizzato"}
              </p>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faVirusSlash}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{catData.vaccinated == 1 ? "Vaccinato" : "Non Vaccinato"}</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faHouse}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{catData.current_place}</p>
            </div>
          </div>
        </div>

        <div className="lg:mt-8">
          <div className="lg:flex lg:flex-col lg:justify-center lg:gap-4">
            <div className="lg:flex lg:flex-col">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPaw}
                  color={"white"}
                  width={30}
                  className="text-3xl"
                />
                <p className="my-2 text-xl font-bold lg:text-2xl">Carattere</p>
              </div>
              <p>{catData.character}</p>
            </div>
            <div className="lg:fle lg:flex-col">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  color={"white"}
                  width={30}
                  className="text-3xl"
                />
                <p className="my-2 text-xl font-bold lg:text-2xl">Storia</p>
              </div>
              <p>{catData.history}</p>
            </div>
            <div className="lg:fle lg:flex-col">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faSuitcaseMedical}
                  color={"white"}
                  width={30}
                  className="text-3xl"
                />
                <p className="my-2 text-xl font-bold lg:text-2xl">
                  Bisogni Particolari
                </p>
              </div>
              <p>{catData.needs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}
