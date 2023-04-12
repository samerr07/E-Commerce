import React from 'react'
import "./category.scss";
import img1 from "../assests/16.webp"
import img2 from "../assests/17.webp"
import img3 from "../assests/18.webp"
import img4 from "../assests/19.webp"
import img5 from "../assests/20.webp"
import img6 from "../assests/21.webp"
import img7 from "../assests/22.webp"
import img8 from "../assests/23.webp"
import img9 from "../assests/24.webp"
import img10 from "../assests/25.webp"

const Category = () => {
  return (
    <div className='category'>
        <div className="cat1">
            <img src={img1} alt="" srcset="" /> 
            <span>Grocery</span>
        </div>
        <div className="cat2">
            <img src={img2} alt="" srcset="" /> 
            <span>Mobiles</span>
        </div>
        <div className="cat3">
            <img src={img3} alt="" srcset="" /> 
            <span>Fashion</span>
        </div>
        <div className="cat4">
            <img src={img4} alt="" srcset="" />
            <span>Electronics</span> 
        </div>
        <div className="cat5">
            <img src={img5} alt="" srcset="" /> 
            <span>Home</span>
        </div>
        <div className="cat6">
            <img src={img6} alt="" srcset="" /> 
            <span>Appliances</span>
        </div>
        <div className="cat7">
            <img src={img7} alt="" srcset="" /> 
            <span>Travel</span>
        </div>
        <div className="cat8">
            <img src={img8} alt="" srcset="" /> 
            <span>Top Offers</span>
        </div>
        <div className="cat9">
            <img src={img9} alt="" srcset="" /> 
            <span>Beauty,Toys & More</span>
        </div>
        <div className="cat10">
            <img src={img10} alt="" srcset="" /> 
            <span>Bikes</span>
        </div>
      
      
      {/* <img src={img2} alt="" srcset="" />
      <img src={img3} alt="" srcset="" />
      <img src={img4} alt="" srcset="" />
      <img src={img5} alt="" srcset="" />
      <img src={img6} alt="" srcset="" />
      <img src={img7} alt="" srcset="" />
      <img src={img8} alt="" srcset="" />
      <img src={img9} alt="" srcset="" />
      <img src={img10} alt="" srcset="" /> */}
    </div>
  )
}

export default Category
