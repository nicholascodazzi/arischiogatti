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
import Image from "next/image";

export default function HomeSwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectFade]}
      className="mySwiper h-96 lg:h-[32rem]"
      slidesPerView={1}
      effect={"fade"}
      centeredSlides={true}
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Image
          src="/images/ui/carousel/cat-1.jpg"
          className="h-full w-full object-cover"
          width={10000}
          height={10000}
          alt="gatto 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/ui/carousel/cat-2.jpg"
          className="h-full w-full object-cover"
          width={10000}
          height={10000}
          alt="gatto 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/ui/carousel/cat-4.jpg"
          className="h-full w-full object-cover"
          width={10000}
          height={10000}
          alt="gatto 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/ui/carousel/cat-5.jpg"
          className="h-full w-full object-cover"
          width={10000}
          height={10000}
          alt="gatto 5"
        />
      </SwiperSlide>
    </Swiper>
  );
}
