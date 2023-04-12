import React from 'react'
import "./footer.scss";
import {AiOutlineWhatsApp,AiOutlineInstagram,AiOutlineFacebook,} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import img from "../assests/26.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-md-3 firstImg">
            <img src={img} alt="" width={"140px"} height={"140px"} />
          </div>
          <div className="col-md-3 firstRow">
            <h3>Shop</h3>
            <ul className="list-unstyled">
              <li><a href="#">Men's Clothing</a></li>
              <li><a href="#">Women's Clothing</a></li>
              <li><a href="#">Kids Clothing</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Home Appliances</a></li>

            </ul>
          </div>
          <div className="col-md-3 secRow ">
            <h3>About</h3>
            <ul className="list-unstyled">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Corporate Stories</a></li>
              <li><a href="#">Flipkart Stories</a></li>

            </ul>
          </div>
          <div className="col-md-3 secRow ">
            <h3>Policy</h3>
            <ul className="list-unstyled">
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Sitemap</a></li>

            </ul>
          </div>
          <div className="col-md-3 thirdRow">
            <h3>Contact</h3>
            <ul className="list-unstyled">
              <li><a href="#">Email Us</a></li>
              <li><a href="#">Call Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 forRow1">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li className='icon'><a href="#" ><AiOutlineWhatsApp  size={"30px"}/></a></li>
              <li className='icon'><a href="#" ><AiOutlineInstagram size={"30px"}/></a></li>
              <li className='icon'><a href="#"><AiOutlineFacebook size={"30px"}/></a></li>
              <li className='icon'><a href="#"><BsTelegram size={"30px"}/></a></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Ecommerce Store. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
