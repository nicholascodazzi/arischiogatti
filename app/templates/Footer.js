import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import FooterVoice from "../components/subcomponents/FooterVoice";

export default function Footer() {
  return (
    <footer>
      <div className="grid w-full grid-cols-1 items-center justify-center gap-8 bg-violet-400 px-12 py-8 lg:grid-cols-5">
        <div className="flex w-full justify-center lg:block">
          <Image
            src="/images/arischiogatti/logo_white.png"
            width={350}
            height={250}
            alt=""
          />
        </div>

        <FooterVoice
          title={"Sede Operativa"}
          subtitle={
            "Via de Chirico - Crema (CR) \n non abbiamo numero civico, \n ci troviamo di fronte al n. 10."
          }
        />

        <FooterVoice
          title={"Contatti"}
          subtitle={
            "+ 39 338 385 8920, anche su WhatsApp. \n associazione.arischiogatti@gmail.com"
          }
        />

        <FooterVoice
          title={"Avviso"}
          subtitle={
            "Essendo tutti volontari se non ti rispondiamo subito al telefono, mandaci un WhatsApp. \n Sarà nostra cura rispondere quanto prima."
          }
        />

        <div className="flex justify-center gap-8">
          <FontAwesomeIcon
            icon={faFacebook}
            width={35}
            className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out md:text-4xl"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            width={35}
            className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out md:text-4xl"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            width={35}
            className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out md:text-4xl"
          />
          <FontAwesomeIcon
            icon={faTiktok}
            width={35}
            className="text-3xl text-white duration-200 hover:scale-125 hover:cursor-pointer hover:ease-in-out md:text-4xl"
          />
        </div>
      </div>
    </footer>
  );
}
