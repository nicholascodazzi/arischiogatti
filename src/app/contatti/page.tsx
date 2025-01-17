"use client";
import Title from "../../components/subcomponents/Title";
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.5798852854487!2d9.687761676726502!3d45.3774720392205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47813043868088a3%3A0x4cbb18825025403!2sAssociazione%20Arischiogatti%20ODV!5e0!3m2!1sit!2sit!4v1736954498464!5m2!1sit!2sit"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>
    </>
  );
}
