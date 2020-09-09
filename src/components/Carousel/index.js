import React from "react";
import { Carousel } from 'react-bootstrap'
import trish1 from "./trish1.jpg"
import trish3 from "./trish3.jpg"
import trishboat from "./trishboat.jpg"

export function Carousel(){
    return(
        <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={trish1}
      alt="Whoops!"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={trishboat}
      alt="Whoops!"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={trish3}
      alt="Whoops!"
    />
  </Carousel.Item>
</Carousel>
</>
    )
}

export default Carousel;

