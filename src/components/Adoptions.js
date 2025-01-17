"use client";
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

import AdoptionSliderCard from "./subcomponents/Adoption-Swiper-Card";
import TitleSubtitle from "./subcomponents/Title-Subtitle";
export default function Adoptions() {
  return (
    <>
      <TitleSubtitle
        title={"Appelli"}
        subtitle={"Ogni gatto ha una storia da raccontare"}
      />

      <div>
        <div className="lg:flex lg:justify-center">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectFade]}
            className="h-[500px] w-11/12 md:w-1/2 lg:w-10/12"
            // effect={"fade"}
            centeredSlides={true}
            // fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat1"
                name="Luna"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat2"
                name="Oliver e Sidh"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat3"
                name="Ginger"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat4"
                name="Milo"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat5"
                name="Stellina"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat6"
                name="Zen"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat7"
                name="Ombra"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
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
