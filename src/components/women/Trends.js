import React from 'react'
import {Link} from "react-router-dom"

import "../../asset/css/trends.css"
import Images from '../../config/Images';



export default function Trends() {
  return (
    <div className=' container mainTrends'>
        <div className='trendlogo'>
       <img src={Images.img43} alt="trends"/>
        </div>
        <div className='trendbanner'>
       <Link className='img' to="/"><img src={Images.img39} alt="trendsb1"/></Link>
       <Link className='img' to="/"><img src={Images.img40} alt="trendsb2"/></Link>
       <Link className='img' to="/"><img src={Images.img41} alt="trendsb3"/></Link>
       <Link className='img' to="/"><img src={Images.img42} alt="trendsb4"/></Link>

        </div>
    </div>
  )
}
