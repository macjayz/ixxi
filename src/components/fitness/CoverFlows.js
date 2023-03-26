import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination ,EffectCoverflow} from "swiper";
import "swiper/css/effect-coverflow";


import "../../asset/css/gridstyles.css"
import Images from '../../config/Images';

export default function CoverFlows() {
  return (
    <>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}

      slidesPerView={3}
      grid={{
        rows: 2,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination,EffectCoverflow]}
      className="mySwiper"
    >
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
      <SwiperSlide><img src={Images.img24} alt="caro 1"/></SwiperSlide>
    </Swiper>
  </>
  )
}
