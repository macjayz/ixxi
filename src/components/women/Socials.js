import React from 'react'
import {Link} from "react-router-dom"


import Images from '../../config/Images';
import "../../asset/css/socials.css";

export default function Socials() {
  return (
    <div className='mainSocial'>
        <div className='left'>
        <Link className='img' to="/"><img src={Images.Facebook} alt="trendsb1"/></Link>
        <Link className='img' to="/"><img src={Images.instagram} alt="trendsb2"/></Link>
        <Link className='img' to="/"><img src={Images.snapchat} alt="trendsb3"/></Link>
            
        </div>
        <div className='right'>
        <Link className='img' to="/"><img src={Images.visa} alt="trendsb1"/></Link>
        <Link className='img' to="/"><img src={Images.express} alt="trendsb2"/></Link>
        <Link className='img' to="/"><img src={Images.mastercard} alt="trendsb3"/></Link>
        <Link className='img' to="/"><img src={Images.paypal} alt="trendsb1"/></Link>
        <Link className='img' to="/"><img src={Images.electron} alt="trendsb2"/></Link>
        </div>
        
    </div>
  )
}
