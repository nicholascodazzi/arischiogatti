"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AdoptionSwiperCard from "@/src/features/homepage/components/cat-cards";
import TitleSubtitle from "../components/title-subtitle";
import Sections from "../features/homepage/components/sections";
import HomeSwiper from "../features/homepage/components/swiper";
import { fetchNCats } from "../features/homepage/actions/fetch-n-cats";
import { cats as CatsType } from "@prisma/client";

export default function Home() {
  const [cats, setCats] = useState<CatsType[]>([]);

  const handleFetchCats = async () => {
    setCats((await fetchNCats(8)) ?? []);
  };

  handleFetchCats();

  return (
    <>
      <HomeSwiper />

      <Sections />

      {/* ADOPTIONS */}
      <TitleSubtitle
        title={"Appelli"}
        subtitle={"Ogni gatto ha una storia da raccontare"}
      />

      <div>
        <div className="lg:flex lg:justify-center">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectFade]}
            className="h-[500px] w-11/12 md:w-1/2 lg:w-10/12"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 50 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {/* ✅ Ensure `cats` is always an array */}
            {cats.length > 0 ? (
              cats.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <AdoptionSwiperCard
                    image={cat.image ?? ""}
                    name={cat.name ?? ""}
                  />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center text-gray-500">
                Nessun gatto disponibile...
              </p>
            )}
          </Swiper>
        </div>
      </div>

      <div className="mb-8 flex w-full justify-center">
        <div className="w-2/3 rounded-lg bg-violet-400 px-8 py-4 text-center text-base font-semibold text-white lg:px-16 lg:py-8 lg:text-2xl lg:drop-shadow-xl">
          <p className="drop-shadow-xl">Abbiamo Aiutato</p>
          <p className="text-4xl font-bold drop-shadow-xl lg:text-5xl">1942</p>
          <p className="drop-shadow-xl">Mici a Trovare Casa</p>
        </div>
      </div>
    </>
  );
}
