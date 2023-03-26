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
        <SwiperSlide><img src={Images.f2} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi FITTNESS SHORT TIGHTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f4} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi FITTNESS LONG TIGHTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f3} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi FITTNESS FOR MEN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI FITTNESS SINGLET</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f1} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI FITTNESS JEAN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f5}  alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI FITTNESS RED TIGHT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f6} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI ELASTIC TIGHT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f7} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI COMPLETE ASH TIGHT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.f8} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI YOGA PANTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
