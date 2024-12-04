import Image from "next/image";

export default function SectionCard({ image, title, description }) {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:hover:scale-110 lg:hover:ease-in lg:duration-150">
      <div className="p-10 rounded-full bg-violet-400">
        <Image src={image} width={200} height={200} alt="" />
      </div>
      <div className="text-center p-4">
        <p className="text-3xl font-bold text-violet-800">{title}</p>
        <p className="text-md font-bold text-violet-800">{description}</p>
      </div>
    </div>
  );
}
