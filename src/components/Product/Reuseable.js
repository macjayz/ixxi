import React from "react";
import { BiHeart } from "react-icons/bi";
import {Link} from "react-router-dom"

import Images from "../../config/Images";
import "../../asset/css/reuse.css";
import ProductFilters from "./ProductFilters";

const personale = [
    {
      img: Images.img1,
      alt: "im1",
      title: "SELLING FAST",
      title2: "More Colours",
      icon: BiHeart,
      description:
        "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
      price: "£49.00"
    },
    {
        img: Images.img2,
        alt: "im1",
        title: "SELLING FAST",
        title2: "More Colours",
        icon: BiHeart,
        description:
          "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
        price: "£49.00"
      },
      {
        img: Images.img3,
        alt: "im1",
        title: "SELLING FAST",
        title2: "More Colours",
        icon: BiHeart,
        description:
          "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
        price: "£49.00"
      },
      {
        img: Images.img4,
        alt: "im1",
        title: "SELLING FAST",
        title2: "More Colours",
        icon: BiHeart,
        description:
          "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
        price: "£49.00"
      },

      {
        img: Images.img9,
        alt: "im1",
        title: "SELLING FAST",
        title2: "More Colours",
        icon: BiHeart,
        description:
          "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
        price: "£49.00"
      },
      {
        img: Images.img6,
        alt: "im1",
        title: "SELLING FAST",
        title2: "More Colours",
        icon: BiHeart,
        description:
          "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
        price: "£49.00"
      },
      {
        img: Images.img7,
        alt: "im1",
        title: "SELLING FAST",
        title2: "More Colours",
        icon: BiHeart,
        description:
          "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
        price: "£49.00"
      },
      {
        img: Images.img8,
        alt: "im1",
        title: "SELLING FAST",
        title2: "More Colours",
        icon: BiHeart,
        description:
          "ASOS DESIGN flute sleeve collared wrap midi dress with gathers in dark blue",
        price: "£49.00"
      },
  ];
  
  export default function Reuseable() {
    return (
      <>
      <ProductFilters/>
      <div className="topReuse ">
        {personale.map(({ img, alt, title, title2,price,description }, index) => (
          <div className="mainReuse" key={index}>
            <img src={img} alt={alt} />
            <Link to="/" className="overlay">
              <h1>{title}</h1>
              <div>
                <h5>
                {title2} 
                </h5>
            
            
              
              </div>
            </Link>
            <small>{description}</small>
            <h4>Price :{price}</h4>
          </div>
        ))}
      </div>
      </>
    );
  }
  