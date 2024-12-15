import Image from "next/image";

export default function SectionCard({ image, title, description }) {
  return (
    
    <div className="flex flex-col items-center hover:scale-110 hover:ease-in duration-150">
      <div className="p-10 rounded-full bg-violet-300">
        <div className="hidden lg:block">
        <Image src={image} width={200} height={200} alt="" />
        </div>
        <div className="lg:hidden">
        <Image src={image} width={100} height={100} alt="" />
      </div>
      </div>
      <div className="text-center lg:p-4 px-12 py-4">
        <p className="lg:text-3xl text-2xl font-bold text-violet-800">{title}</p>
        <p className="lg:text-md text-sm font-bold text-violet-800">{description}</p>
      </div>
    </div>
    
  );
}
