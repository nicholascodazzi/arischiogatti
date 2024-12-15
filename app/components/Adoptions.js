"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import AdoptionSliderCard from "./subcomponents/Adoption-Swiper-Card";
export default function Adoptions() {
  return (
    <>
      <div className="w-full flex justify-center my-8 ">
        <p className="font-bold text-violet-700 lg:text-4xl text-3xl drop-shadow-xl">
          Appelli
        </p>
      </div>

      <div>
        <div className="lg:flex lg:justify-center">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectFade]}
            className="lg:h-[500px] lg:w-10/12"
            // effect={"fade"}
            centeredSlides={true}
            // fadeEffect={{ crossFade: true }}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false
            // }}
            grabCursor={true}
            loop={true}
            breakpoints={{
              0:{
                slidesPerView: 1,
              },
              768:{
                slidesPerView: 3,
                spaceBetween: 125
              }}
            }
          >
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/cat1.jpg"}
                image_description="cat1"
                name="Luna"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/cat2.jpg"}
                image_description="cat2"
                name="Oliver e Sidh"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/cat3.jpg"}
                image_description="cat3"
                name="Ginger"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/cat4.jpg"}
                image_description="cat4"
                name="Milo"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/cat5.jpg"}
                image_description="cat5"
                name="Stellina"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/cat6.jpg"}
                image_description="cat6"
                name="Zen"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard
                image={"/images/ui/adoptions/cat7.jpg"}
                image_description="cat7"
                name="Ombra"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="lg:w-full lg:flex lg:justify-center lg:my-8">
        <div className="lg:w-2/3 lg:py-8 lg:px-16 lg:text-2xl lg:drop-shadow-xl text-center text-white font-semibold bg-violet-400">
          <p className="lg:drop-shadow-xl">Abbiamo Aiutato</p>
          <p className="lg:text-5xl lg:drop-shadow-xl font-bold">1942</p>
          <p className="lg:drop-shadow-xl">Mici a Trovare Casa</p>
        </div>
      </div>
    </>
  );
}
