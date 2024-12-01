import Image from "next/image";
export default function SectionCard({ image, title, description }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-max">
        <Image src={image} width={350} height={350} alt="Gatto Adozioni" />
      </div>
      <div className="text-center mt-5">
        <p className="text-3xl font-bold text-black">{title}</p>
        <p className="text-lg font-bold text-black">{description}</p>
      </div>
    </div>
  );
}
