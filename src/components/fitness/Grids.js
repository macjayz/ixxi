import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import "swiper/css/effect-coverflow";

import "../../asset/css/gridstyles.css";
import Images from "../../config/Images";

export default function Grids() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper1">
        <SwiperSlide className="SwiperSlide1">
          <img src={Images.f4} alt="caro 1" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f3} alt="caro 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f2} alt="caro 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f1} alt="caro 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f} alt="caro 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f5} alt="caro 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f6} alt="caro 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f7} alt="caro 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.f8} alt="caro 9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
