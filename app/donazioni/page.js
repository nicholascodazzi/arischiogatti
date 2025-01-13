"use client";
import Title from "../components/subcomponents/Title";
import DonationCard from "../components/subcomponents/Donation-Card";
export default function Adoptions() {
  return (
    <>
      <Title>Donazioni</Title>
      <div className="mx-8 my-4 flex flex-col items-center text-base font-semibold text-violet-500 md:mx-32 lg:mx-48 xl:mx-80">
        <div className="mb-4 flex flex-col items-center">
          <p className="italic">
            Ogni donazione, grande o piccola che sia, fa la differenza.
          </p>
          <p>
            Sostienici e insieme creeremo un futuro migliore per i nostri amici
            a 4 zampe.
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center text-center">
          <p>
            Arischiogatti non gode di sovvenzioni comunali o statali ma
            sopravvive grazie all’autotassazione dei volontari e alle donazioni
            di chi, generosamente, decide di sostenere la nostra missione.
          </p>
        </div>
        <div className="flex gap-8 md:flex-row">
          <DonationCard
            title="Bonifico Bancario"
            description={`IT73F0503456847000000002901`}
          />
          <DonationCard
            title="PayPal"
            description="associazione.arischiogatti@gmail.com"
          />
          <DonationCard
            title="5x1000"
            description="Codice Fiscale: 93056360196."
          />
        </div>
      </div>
    </>
  );
}
