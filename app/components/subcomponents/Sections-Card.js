import Image from "next/image";
export default function SectionCard({ image, title, description }) {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Image src={image} width={1000} height={1000} alt="Gatto Adozioni" className="rounded-t-3xl" />
      <div className="text-center mt-5 p-4">
        <p className="text-3xl font-bold text-black">{title}</p>
        <p className="text-lg font-bold text-black">{description}</p>
      </div>
    </div>
  );
}
