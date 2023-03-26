import React from "react";
import "../../asset/css/banner.css";
export default function Banner() {
  return (
    <div className="mt-3 bannertop">
    <h1>UP TO 50% OFF FRESH FAVES!</h1>
      <h4> INCL. DRESSES, TOPS, SHOES & MORE</h4>
      <small>Limited time only. Selected styles marked down as shown.</small>
      <div className="mt-4 p-5  text-white rounded topBanner">
        <div className="innerbanner">
          <div className="mainBanner">
            <p>UP TO 50% OFF FRESH FAVES! INCL. DRESSES, TOPS, SHOES & MORE</p>
          </div>

          <div className="mainBanner1">
            <p> FREE WORLDWIDE DELIVERY</p>
          </div>
        </div>
      </div>
    </div>
  );
}
