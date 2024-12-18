import Image from "next/image";
export default function CatListCard({ image, name, sex }) {
  return (
    <div>
      <div>
        <Image src={image} width={10000} height={10000} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
}
