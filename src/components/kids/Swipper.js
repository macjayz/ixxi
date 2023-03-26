import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay,Mousewheel, Pagination,EffectFlip} from "swiper";

import 'swiper/css/effect-flip';


import "../../asset/css/swiperstyles.css"
import Images from '../../config/Images';

export default function Swipper() {
  return (
    <div>
         <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={300}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Mousewheel, Pagination,EffectFlip]}
        className="mySwiper"
        effect="flip"
      >
        <SwiperSlide><img src={Images.k1} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi KIDDIES JACKET</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k2} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi KIDDIES JEAN TOP</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k3} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi KIDDIES JEAN TOUSERS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k4} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI ALL BLACK</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k5} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI KIDDIES GOWN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k6} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI KIDDIES SWEATER</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k7} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI SWEAT SHIRT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k1} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI KIDDIES JACKET</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.k4} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI ALL BLACK</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
