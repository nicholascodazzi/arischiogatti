import Image from "next/image";

export default function AdoptionSliderCard({
  image,
  image_description,
  name,
  sex,
  description,
  url
}) {
  return (
    <div className="border border-black rounded-2xl shadow-lg bg-violet-400 overflow-hidden">
      <div className="relative lg:flex lg:justify-center lg:items-center min-h-[250px] max-h-[250px]">
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
        <a href="#">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-white">{description}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none"
        >
          Adottalo Subito!
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
