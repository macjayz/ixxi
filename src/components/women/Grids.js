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
          <img src={Images.img35} alt="caro 1" />
          <h1>FRESH DRESSES </h1>
          <p>Spring has sprung</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img18} alt="caro 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img22} alt="caro 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img23} alt="caro 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img21} alt="caro 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img35} alt="caro 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img34} alt="caro 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img26} alt="caro 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images.img31} alt="caro 9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
