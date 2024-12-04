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
      <div className="lg:w-full lg:flex lg:justify-center lg:my-8">
        <div className="lg:w-2/3 lg:py-8 lg:px-16 lg:text-2xl lg:drop-shadow-xl text-center text-white font-semibold bg-violet-300">
          <p className="lg:drop-shadow-xl">Abbiamo Aiutato</p>
          <p className="lg:text-5xl lg:drop-shadow-xl font-bold">1942</p>
          <p className="lg:drop-shadow-xl">Mici a Trovare Casa</p>
        </div>
      </div>

      <div>
        <div className="lg:w-2/3">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectFade]}
            className="mySwiper lg:h-[600px]"
            slidesPerView={3}
            effect={"fade"}
            centeredSlides={true}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            grabCursor={true}
            loop={true}
          >
            <SwiperSlide>
              <AdoptionSliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSliderCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
