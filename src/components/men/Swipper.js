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
        <SwiperSlide><img src={Images.m2} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi CORPERATE SHOES</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m4} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi HAT & COAT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m6} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>iXXi SUIT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m8} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI CORPERATE SUIT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m9} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI POLO SHIRTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m4} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI HALF SUITS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m7} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI RIPPED JEANS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m10} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI SHADES WITH SUIT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.m1} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI HOODIE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
