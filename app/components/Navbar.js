import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav>
      <div className="lg:w-full lg:h-28 lg:flex lg:items-center lg:justify-between lg:px-4 shadow-[0_1px_5px_1px_rgba(0,0,0,0.3)]">
        <Image
          src="/images/arischiogatti/logo.png"
          width={350}
          height={250}
          alt=""
        />

        <div className="lg:flex lg:flex-col lg:gap-3 xs:invisible">
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-3">
            <div className="lg:flex lg:items-center lg:gap-3 lg:py-2 lg:px-4 lg:rounded-full lg:w-max font-normal text-white bg-violet-500 hover:bg-violet-700 hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faPhone}
                width={30}
                className="text-white"
              />
              <div>+ 39 338 385 8920</div>
            </div>
            <div className="lg:flex lg:items-center lg:gap-3 lg:py-2 lg:px-4 lg:rounded-full font-normal text-white bg-violet-500 hover:bg-violet-700 hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faEnvelope}
                width={30}
                className="text-white"
              />
              <div>associazione.arischiogatti@gmail.com</div>
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center lg:gap-14 lg:font-bold text-violet-500 ">
            <div>
              <span className="hover:text-violet-700 cursor-pointer">Home</span>
            </div>
            <div>
              <span className="hover:text-violet-700 cursor-pointer">
                Adozioni
              </span>
            </div>
            <div>
              <span className="hover:text-violet-700 cursor-pointer">
                Smarriti
              </span>
            </div>
            <div>
              <span className="hover:text-violet-700 cursor-pointer">
                Chi Siamo
              </span>
            </div>
            <div>
              <span className="hover:text-violet-700 cursor-pointer">
                Comunicazioni
              </span>
            </div>
            <div>
              <span className="hover:text-violet-700 cursor-pointer">
                Donazioni
              </span>
            </div>
            <div>
              <span className="hover:text-violet-700 cursor-pointer">
                Contatti
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
