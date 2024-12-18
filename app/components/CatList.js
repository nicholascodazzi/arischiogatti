import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Grid, Pagination } from "swiper/modules";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
import "swiper/css/bundle";

import CatListCard from "./subcomponents/CatList-Card";

export default function CatList() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/catlist");
      const data = await response.json();
      setJsonData(data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 5,
          fill: "row",
        }}
        spaceBetween={32}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="text-black"
      >
        {jsonData.length > 0 ? (
          <>
            {jsonData.map((item) => (
              <SwiperSlide key={item.name}>
                <CatListCard
                  image="/images/ui/carousel/cat-1.jpg"
                  name={item.name}
                  sex={item.sex}
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Swiper>
    </>
  );
}
