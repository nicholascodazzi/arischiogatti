"use client";
import Title from "../../components/subcomponents/Title";
import Image from "next/image";
export default function Adoptions() {
  return (
    <>
      <Title>Chi Siamo</Title>
      <div className="mx-8 flex flex-col items-center text-base font-semibold text-violet-500 md:mx-32 lg:mx-48 xl:mx-80">
        <div className="my-4">
          <div className="flex flex-col justify-center sm:flex-row md:flex-row md:items-center">
            <p>
              Arischiogatti è un'associazione no profit che si dedica al
              benessere dei gatti abbandonati e randagi. Ci impegniamo a fornire
              loro cure veterinarie, cibo, riparo e amore, fino a quando non
              trovano una casa adottiva.
            </p>
            <Image
              src="/images/arischiogatti/logo.png"
              width={250}
              height={250}
              alt=""
              className="m-4 self-center object-contain"
            />
          </div>
          <p className="my-2 text-xl font-bold text-violet-700">
            La nostra missione
          </p>
          <p>
            La nostra missione è migliorare la vita dei gatti meno fortunati,
            promuovendo l'adozione responsabile e la sterilizzazione di massa.
            Crediamo che ogni gatto meriti una vita dignitosa e felice.
          </p>
          <p className="my-2 text-xl font-bold text-violet-700">
            I nostri obiettivi
          </p>

          <ul className="list-disc space-y-4">
            <li>
              <strong>Recupero e cura dei gatti abbandonati:</strong> Ci
              occupiamo di recuperare gatti abbandonati o feriti, fornendo loro
              le cure veterinarie necessarie e cercando loro una famiglia
              adottiva.
            </li>
            <li>
              <strong>Gestione di colonie feline:</strong> Gestiamo diverse
              colonie feline presenti nel territorio, occupandoci della loro
              sterilizzazione, vaccinazione e alimentazione.
            </li>
            <li>
              <strong>Sensibilizzazione:</strong> Organizziamo eventi e campagne
              di sensibilizzazione per promuovere l'adozione responsabile e la
              tutela dei gatti.
            </li>
            <li>
              <strong>Collaborazioni:</strong> Collaboriamo con altre
              associazioni e istituzioni per migliorare la condizione dei gatti
              nel territorio.
            </li>
          </ul>
          <p className="my-2 text-xl font-bold text-violet-700">
            La nostra sede
          </p>
          <p>
            Arischiogatti opera in Via Chirico, Crema (Cr). Di fronte al n. 10.
          </p>
          <div>
            <p className="my-2 text-xl font-bold text-violet-700">
              Il nostro staff
            </p>
            <p>Il Direttivo dell’Associazione è costituito da: </p>
            <p>Barbara Agosti (Presidente)</p>
            <p>Nome Cognome (Vicepresidente) </p>
            <p>Nome Cognome (Consigliere) </p>
            <p>Nome Cognome (Consigliere)</p>
            <p>
              Il nostro team è composto da volontari appassionati che dedicano
              il loro tempo libero alla cura dei gatti. Ogni volontario ha un
              ruolo importante nel nostro lavoro, dalla gestione del rifugio
              alla ricerca di famiglie adottive. L’associazione si avvale anche
              di professionisti che su base volontaria e secondo necessità,
              seguono gli aspetti fiscali e legali.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
