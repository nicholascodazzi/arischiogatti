import Image from "next/image";

export default function SectionCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center duration-150 hover:scale-110 hover:ease-in">
      <div className="rounded-full bg-violet-300 p-10">
        <div className="hidden lg:block">
          <Image src={image} width={200} height={200} alt="" />
        </div>
        <div className="lg:hidden">
          <Image src={image} width={100} height={100} alt="" />
        </div>
      </div>
      <div className="px-12 py-4 text-center lg:p-4">
        <p className="text-2xl font-bold text-violet-700 lg:text-3xl">
          {title}
        </p>
        <p className="lg:text-md text-sm font-bold text-violet-500">
          {description}
        </p>
      </div>
    </div>
  );
}
