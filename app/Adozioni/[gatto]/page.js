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
import { useRouter } from "next/router";
export default function CatDetail() {
  Moment.locale("it");
  const [catData, setCatData] = useState([]);

  // console.log(params);

  const searchParams = useSearchParams();
  let catId = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get/cat?id=" + catId);
      const data = await response.json();
      // console.log(data.rows)
      setCatData(data.row);
      // console.log(catData)
    };

    fetchData();
  }, []);

  return catData ? (
    <div className="flex justify-center">
      <div className="mx-4 my-8 rounded-xl bg-violet-400 p-6 sm:mx-0 sm:w-2/3 lg:my-8 lg:p-4 xl:w-1/2">
        <div className="text-2xl font-bold lg:text-3xl xl:text-4xl">
          <p className="capitalize">{catData["NAME"]}</p>
        </div>
        <div className="lg:mt-4 lg:flex">
          <div className="w-full lg:w-3/5">
            <Image
              src={"/images/ui/adoptions/" + catData["IMAGE"]}
              width={10000}
              height={10000}
              alt=""
              className="lg:rounded-xl"
            />
          </div>
          <div className="my-4 flex flex-col gap-4 lg:my-0 lg:ml-4 lg:justify-between lg:gap-0">
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={catData["SEX"] == "M" ? faMars : faVenus}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{catData["SEX"] == "M" ? "Maschio" : "Femmina"}</p>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faDna}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{catData["RACE"]}</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faCakeCandles}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{Moment(catData["BIRTHDAY"]).format("D-MM-YYYY")}</p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faSyringe}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>
                {catData["STERILIZED"] == 1
                  ? "Sterilizzato"
                  : "Non Sterilizzato"}
              </p>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faVirusSlash}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>
                {catData["VACCINATED"] == 1 ? "Vaccinato" : "Non Vaccinato"}
              </p>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <FontAwesomeIcon
                icon={faHouse}
                color={"white"}
                width={30}
                className="ml-2 text-2xl"
              />
              <p>{catData["CURRENT_PLACE"]}</p>
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
                  className="ml-2 text-3xl"
                />
                <p className="my-2 text-xl font-bold lg:text-2xl">Carattere</p>
              </div>
              <p>{catData["CAT_CHARACTER"]}</p>
            </div>
            <div className="lg:fle lg:flex-col">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  color={"white"}
                  width={30}
                  className="ml-2 text-3xl"
                />
                <p className="my-2 text-xl font-bold lg:text-2xl">Storia</p>
              </div>
              <p>{catData["CAT_HISTORY"]}</p>
            </div>
            <div className="lg:fle lg:flex-col">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faSuitcaseMedical}
                  color={"white"}
                  width={30}
                  className="ml-2 text-3xl"
                />
                <p className="my-2 text-xl font-bold lg:text-2xl">
                  Bisogni Particolari
                </p>
              </div>
              <p>{catData["CAT_NEEDS"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
}
