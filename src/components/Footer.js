import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import FooterVoice from "./FooterVoice";

export default function Footer() {
  return (
    <footer className="bg-violet-400 px-12 py-8">
      <div className="flex flex-col items-center gap-4 lg:flex lg:flex-row lg:justify-center lg:gap-16">
        <div>
          <Image
            src="/images/arischiogatti/logo_white.png"
            width={350}
            height={250}
            alt="Arischiogatti Logo"
          />
        </div>

        <div className="flex flex-col">
          <FooterVoice
            title={"Sede Operativa"}
            subtitle={
              "Via de Chirico, snc - Crema (Cr) \n ci troviamo di fronte al n. 10"
            }
          />
        </div>
        <div className="flex flex-col">
          <FooterVoice
            title={"Contatti"}
            subtitle={
              "+39 338 385 8920, anche su WhatsApp \n associazione.arischiogatti@gmail.com"
            }
          />
        </div>

        <div className="flex justify-center">
          <ul className="flex space-x-10">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out lg:text-4xl"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out lg:text-4xl"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out lg:text-4xl"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out lg:text-4xl"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
