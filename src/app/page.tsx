"use client";
import SectionCard from "../components/Sections/SectionsCard";
import Head from "next/head";
import Script from "next/script";
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
import Link from "next/link";
import Image from "next/image";
import AdoptionSwiperCard from "@/src/features/adozioni/components/catCards";
import TitleSubtitle from "../components/Title-Subtitle";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="author" content="Codazzi Nicholas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script src="http://localhost:8097"></Script>

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

      <TitleSubtitle
        title={"Esplora"}
        subtitle={
          " Scopri tutto ciò che riguarda Arischiogatti e resta sempre aggiornato"
        }
      />
      <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        <div className="lg:w-1/6">
          <Link href="/adozioni">
            <SectionCard
              image={"/images/ui/sections/adozioni.svg"}
              title={"Adozioni"}
              description={"Un nuovo amico ti aspetta, vieni a trovarlo!"}
            />
          </Link>
        </div>
        <div className="lg:w-1/6">
          <Link href="#">
            <SectionCard
              image={"/images/ui/sections/comunicazioni.svg"}
              title={"Comunicazioni"}
              description={"Resta sempre aggiornato su iniziative ed eventi!"}
            />
          </Link>
        </div>
        <div className="lg:w-1/6">
          <Link href="#">
            <SectionCard
              image={"/images/ui/sections/smarriti.svg"}
              title={"Smarriti"}
              description={"Ritroviamo i nostri amici insieme!"}
            />
          </Link>
        </div>
      </div>

      {/* ADOPTIONS */}
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
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <AdoptionSwiperCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat1"
                name="Luna"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSwiperCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat2"
                name="Oliver e Sidh"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSwiperCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat3"
                name="Ginger"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSwiperCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat4"
                name="Milo"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSwiperCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat5"
                name="Stellina"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSwiperCard
                image={"/images/ui/adoptions/pepper.jpg"}
                image_description="cat6"
                name="Zen"
                description="Un micetto vivace e curioso, con le zampette bianche e una macchia a forma di cuore sul muso."
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdoptionSwiperCard
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
