import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav>
      <div className="xl:w-full xl:h-32 xl:flex xl:items-center xl:justify-between xl:px-4 xl:shadow-[0_1px_5px_1px_rgba(0,0,0,0.3)]">
        <div className="xl:flex xl:justify-center xl:items-center xl:text-xl xl:gap-3 text-black font-bold">
          <div className="xl:w-24 xl:h-auto">
            <Image
              src="/images/arischiogatti/gatto.png"
              width={10000}
              height={10000}
              className="xl:w-full xl:h-full"
              alt=""
            />
          </div>
          <div>
            <p>
              Associazione Arischiogatti{" "}
              <span className="xl:bg-violet-400 xl:rounded-xl xl:p-1 xl:text-violet-200">
                ODV
              </span>
            </p>
          </div>
        </div>
        <div className="xl:flex xl:flex-col xl:gap-3">
          <div className="xl:flex xl:items-center xl:justify-between xl:gap-3">
            <div className="xl:flex xl:items-center xl:gap-3 xl:py-2 xl:px-4 xl:rounded-full font-normal text-violet-200 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faPhone}
                width={30}
                className="text-violet-200"
              />
              <div>+ 39 338 385 8920</div>
            </div>
            <div className="xl:flex xl:items-center xl:gap-3 xl:py-2 xl:px-4 xl:rounded-full font-normal text-violet-200 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faEnvelope}
                width={30}
                className="text-violet-200"
              />
              <div>associazione.arischiogatti@gmail.com</div>
            </div>
          </div>
          <div className="xl:flex xl:items-center xl:justify-center xl:gap-10 xl:font-bold text-violet-500 ">
            <div>
              <span className="hover:text-violet-800 cursor-pointer">Home</span>
            </div>
            <div>
              <span className="hover:text-violet-800 cursor-pointer">
                Chi Siamo
              </span>
            </div>
            <div>
              <span className="hover:text-violet-800 cursor-pointer">
                Comunicazioni
              </span>
            </div>
            <div>
              <span className="hover:text-violet-800 cursor-pointer">
                Donazioni
              </span>
            </div>
            <div>
              <span className="hover:text-violet-800 cursor-pointer">
                Contatti
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
