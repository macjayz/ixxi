import React from 'react'
import '../../asset/css/swiperstyles.css'
import Footer from '../Footer'
import Banner from './Banner'
import Card from './Card'
import Grids from './Grids'
import Socials from './Socials'
import Swipper from './Swipper'
import Trends from './Trends'
// import Images from '../../config/Images';

export default function FitnessScreen() {
  return (
    <div className='topmost2'>
        <Swipper/>
        <Banner/>
        <Grids/>
        <Banner/>
        <Card/>
        <Trends/>
        <Socials/>
        <Footer/>
    </div>
  )
}
