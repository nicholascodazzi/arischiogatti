import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav>
      <div className="lg:w-full lg:h-32 lg:flex lg:items-center lg:justify-between lg:px-4 lg:w-full lg:h-32 shadow-[0_1px_5px_1px_rgba(0,0,0,0.3)]">
        <div className="lg:flex lg:justify-center lg:items-center text-xl gap-3 text-black font-bold">
          <div className="lg:w-24 lg:h-auto">
            <Image
              src="/images/arischiogatti/gatto.png"
              width={10000}
              height={10000}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div>
            <p>
              Associazione Arischiogatti
              <span className="lg:bg-violet-400 lg:rounded-xl lg:p-1 lg:text-violet-200">
                ODV
              </span>
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:gap-3 xs:invisible">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-3">
            <div className="lg:flex lg:items-center lg:gap-3 lg:py-2 lg:px-4 lg:rounded-full lg:w-max font-normal text-violet-200 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faPhone}
                width={30}
                className="text-violet-200"
              />
              <div>+ 39 338 385 8920</div>
            </div>
            <div className="lg:flex lg:items-center lg:gap-3 lg:py-2 lg:px-4 lg:rounded-full font-normal text-violet-200 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faEnvelope}
                width={30}
                className="text-violet-200"
              />
              <div>associazione.arischiogatti@gmail.com</div>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-10 lg:font-bold text-violet-500 ">
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
