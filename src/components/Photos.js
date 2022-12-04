import React from 'react'
import Carousel from "react-elastic-carousel";
import { breakPoints } from './breakPoints';

const Photos = () => {
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        <img src={require('../resources//Mohitha.jpg')}  alt="Mohitha" width="300" height="400"/>
        <img src={require('../resources/Jishaan.jpeg')}  alt="Jishaan"width="400" height="400"/>
        <img src={require('../resources/Veera.jpeg')}  alt="Veera"width="300" height="400"/>
        <img src={require('../resources/Divya.jpeg')}  alt="Divya"width="300" height="400"/>
        <img src={require('../resources/VeeraDivya.jpeg')}  alt="VeeraDivya"width="500" height="400"/>
      </Carousel>
    </div>
  )
}
export default Photos