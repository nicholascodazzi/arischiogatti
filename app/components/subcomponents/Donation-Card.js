import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
export default function DonationCard({ title, description }) {
  return (
    <div className="rounded-xl bg-violet-400">
      <div className="flex flex-col items-center gap-4 p-4 text-white">
        <div className="flex items-center gap-2">
          <p>{title}</p>
          <FontAwesomeIcon
            icon={
              title == "Bonifico Bancario"
                ? faBank
                : title == "PayPal"
                  ? faPaypal
                  : faHandHoldingDollar
            }
            width={30}
            className="text-3xl"
          />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
