import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
export default function DonationCard({ title, description }) {
  return (
    <div className="rounded-xl bg-violet-400 lg:m-0">
      <div className="flex flex-col items-center gap-4 p-4 text-white">
        <div className="flex items-center gap-2">
          <p className="text-xl md:text-2xl">{title}</p>
          <FontAwesomeIcon
            icon={
              title == "Bonifico Bancario"
                ? faBank
                : title == "PayPal"
                  ? faPaypal
                  : faHandHoldingDollar
            }
            width={30}
            className="text-2xl md:text-3xl"
          />
        </div>
        <p className="text-sm md:text-lg">{description}</p>
      </div>
    </div>
  );
}
