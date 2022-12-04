import React from 'react'
import Carousel from "react-elastic-carousel";
import { breakPoints } from './breakPoints';

const Photos2 = () => {
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        <img src={require('../images/Divya1.jpg')}  alt="Divya"width="300" height="400"/>
        <img src={require('../images/Jishaan3.jpg')}  alt="Divya"width="300" height="400"/>
        <img src={require('../images/Jishaan2.jpg')}  alt="Divya"width="300" height="400"/>
        <img src={require('../images/MohiJishaan.jpg')}  alt="Divya"width="300" height="400"/>
        <img src={require('../images/GaneshChavithi.jpg')}  alt="Divya"width="300" height="400"/>
      </Carousel>
    </div>
  )
}
export default Photos2