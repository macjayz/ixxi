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
        <SwiperSlide><img src={Images.img24} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>FASHION BOOTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img25} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI BOOTS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img26} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI BAGS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img27} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI LIGHT DRESS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img28} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI SARI</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img29} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI HALF SUITS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img30} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI GLASSES</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img31} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI JEANS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide><img src={Images.img32} alt="caro 1"/>
        <div className="swiper-slide-overlay">
        <h2>IXXI WOOL TOPS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
