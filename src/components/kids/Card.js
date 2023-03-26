import React from 'react'
import {Link} from "react-router-dom"

import Images from "../../config/Images";
import "../../asset/css/card.css";


export default function Card() {
  return (
    <div className="container mt-3">
  <h2 className='funday'>iXXi FunDay</h2>
  <p>get our latest daily wears at affordable prices...</p>
 <div className='mainCard'>
 <div className="card cardbtn" style={{width:"400px"}}>
 <Link to="/" className="btn cardbtn">
  <img src={Images.k3} alt="Card 1" style={{width:"100%"}}/>

    <div className="card-body">
      <h4 className="card-title">iXXi Jean Combo</h4>
      <p className="card-text">get your fedora hats on ixxi store</p>
    </div>
      </Link>

  </div>
  
  <div className="card cardbtn" style={{width:"400px"}}>
 <Link to="/" className="btn cardbtn">

  <img src={Images.k6} alt="Card 2" style={{width:"100%"}}/>

    <div className="card-body">
    <h4 className="card-title">iXXi Sweaters</h4>
      <p className="card-text">get your silver like glass on ixxi store</p>
      </div>
    </Link>

  </div>
 </div>
</div>
  )
}
