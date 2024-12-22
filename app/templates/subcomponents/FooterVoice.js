export default function FooterVoice({ title, subtitle }) {
  return (
    <div className="flex flex-col flex-wrap break-words text-center lg:text-left">
      <p className="text-base font-bold sm:text-lg">{title}</p>
      <p
        className="text-xs font-normal sm:text-sm"
        dangerouslySetInnerHTML={{ __html: subtitle.replace(/\n/g, "<br/>") }}
      ></p>
    </div>
  );
}
