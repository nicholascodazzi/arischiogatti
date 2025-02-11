import Image from "next/image";
import { AdoptionSwiperCardProps } from "../types";

export default function AdoptionSwiperCard({
  image,
  image_description,
  name,
  sex,
  description,
  url,
}: AdoptionSwiperCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black bg-violet-400 shadow-lg">
      <div className="relative max-h-[250px] min-h-[250px] lg:flex lg:items-center lg:justify-center">
        <a href="#">
          <Image
            src={image}
            alt={image_description}
            fill={true}
            className="object-cover"
          />
        </a>
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex">
          <div>
            <p>Sesso: {sex}</p>
          </div>
        </div>
        <p className="mb-3 font-normal text-white">{description}</p>
        <a
          href={url}
          className="inline-flex items-center rounded-lg bg-violet-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4"
        >
          Adottalo Subito!
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
