"use client";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Link from "next/link";
import Form from "next/form";
export default function Adoptions() {
  return (
    <>
      <Title>Contatti</Title>
      <div className="mx-8 my-4 flex flex-col gap-4 text-base font-semibold text-violet-500 md:mx-32 lg:mx-48 xl:mx-80">
        <div>
          Siamo tutti volontari perciò è possibile che la risposta non sia
          immediata. Ci impegniamo sempre e comunque però a rispondere quanto
          prima.
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-1/2">
            <Title>Informazioni</Title>
            <p>
              Per qualsiasi informazione chiamate il <b>338 385 8920</b> o
              lasciate un messaggio su Whatsapp. Vi risponderemo appena
              possibile.
            </p>
            <p>
              Potete anche contattarci per email a:{" "}
              <Link
                href="mailto:associazione.arischiogatti@gmail.com"
                className="hover:text-violet-700"
              >
                associazione.arischiogatti@gmail.com
              </Link>
            </p>
          </div>
          <div className="w-1/2">
            <Title>Urgenze</Title>
            <p>
              Se trovate gatti incidentati o sofferenti potete chiamare
              <b> Ats Veterinaria</b> al numero <b>0372-497973</b> fino alle
              16:30 per un primo soccorso. Dopo quell'ora potete rivolgervi al
              <b> 0376-2011 tasto 2</b>.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-1/2">
            <Title>Passateci a trovare</Title>
            <p>
              Ci troviamo qui: Via Chirico, snc - Crema (Cr). <br />
              Siamo di fronte al numero 10
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.5798852854487!2d9.687761676726502!3d45.3774720392205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47813043868088a3%3A0x4cbb18825025403!2sAssociazione%20Arischiogatti%20ODV!5e0!3m2!1sit!2sit!4v1736954498464!5m2!1sit!2sit"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-3xl"
            ></iframe>
          </div>
          <div className="w-1/2 rounded-xl bg-violet-400 p-8">
            <Title>Inviaci un messaggio!</Title>
            <Form action="">
              <div className="mt-6 flex flex-col gap-6">
                <Input type="text" name="Nome" id="Nome" />
                <Input type="text" name="Cognome" id="Cognome" />
                <Input type="text" name="Email" id="Email" />
                <Input type="text" name="Telefono" id="Telefono" />
                <Input type="textarea" name="Messaggio" id="Messaggio" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
