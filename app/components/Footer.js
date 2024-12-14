import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="h-64 lg:flex lg:justify-center bg-violet-400">
      <div className="lg:flex lg:h-full lg:items-center lg:gap-20">
        <Image
          src="/images/arischiogatti/logo_white.png"
          width={350}
          height={250}
          alt=""
        />
        <div className="lg:flex lg:flex-col lg:gap-4">
          <div>
            <p className="text-xl font-bold">Sede Operativa</p>
            <p className="text-sm font-normal">Via de Chirico - Crema (CR)</p>
            <p className="text-xs font-normal">
              non abbiamo numero civico, <br />
              ci troviamo di fronte al n°10
            </p>
          </div>
          <div>
            <p className="text-xl font-bold">Email</p>
            <a href="#">
              <p className="text-sm">associazione.arischiogatti@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:gap-4">
          <p className="text-xl font-bold">Contatti</p>
          <p className="text-sm font-normal">
            + 39 338 385 8920 anche su WhatsApp
          </p>
          <p className="text-xl font-bold">Avviso</p>
          <p className="text-xs font-normal">
            Essendo tutti volontari se non ti rispondiamo <br />
            subito al telefono, mandaci un WhatsApp. <br />
            Sarà nostra cura rispondere quanto prima.
          </p>
        </div>
        <div>
          {" "}
          <div className="lg:flex lg:gap-8">
            <FontAwesomeIcon
              icon={faFacebook}
              width={35}
              className="text-white"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              width={35}
              className="text-white"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              width={35}
              className="text-white"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              width={35}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
