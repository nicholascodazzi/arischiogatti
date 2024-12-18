export default function TitleSubtitle({ title, subtitle }) {
  return (
    <div className="my-8 flex flex-col items-center px-4">
      <p className="text-3xl font-bold text-violet-700 lg:text-4xl">{title}</p>
      <p className="mt-2 text-center text-lg font-bold text-violet-500 drop-shadow-xl lg:text-base">
        {subtitle}
      </p>
    </div>
  );
}
