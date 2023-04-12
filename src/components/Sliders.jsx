import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assests/9.jpg"
import img2 from "../assests/10.jpg"
import img3 from "../assests/11.jpg"
import img4 from "../assests/12.jpg"
import img5 from "../assests/13.jpg"
import img6 from "../assests/14.jpg"
import img7 from "../assests/15.jpg"


import "./sliders.scss";

const Sliders = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="carousel">
        <Slider className='slid' {...sliderSettings}>
      <div>
        <img src={img1} alt="" width={"1510px"} height={"340px"} />
      </div>
      <div>
      <img src={img2} alt="" width={"1510px"} height={"340px"} />
      </div>
      <div>
      <img src={img3} alt="" width={"1510px"} height={"340px"} />
      </div>
      <div>
      <img src={img4} alt="" width={"1510px"} height={"340px"}/>
      </div>
      <div>
      <img src={img5} alt="" width={"1510px"} height={"340px"}/>
      </div>
      <div>
      <img src={img6} alt="" width={"1510px"} height={"340px"}/>
      </div>
      <div>
      <img src={img7} alt="" width={"1510px"} height={"340px"}/>
      </div>
    </Slider>
    </div>
    
  )
}

export default Sliders
