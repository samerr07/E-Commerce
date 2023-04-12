import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assests/FlipLogo.png"
import Logo1 from "../assests/Flip Logo1.jpg"
import "./nav.scss";
import {FiSearch} from "react-icons/fi";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className ="nav">
        <nav>
            <Link to="/" className='logo'><img src={Logo} alt="jfj" width={"160px"} height={"70px"} /></Link>
            <div className="search">
                <input type="text" placeholder='Search for products, brands and more . . .'></input>
                
                <FiSearch className='ser' size={"40px"} />
            </div>
            
            <div className="btn">
                <Link className='log' to="/login">Login</Link>
            </div>

            <div className="cart">
                <Link className='cart1' to="/cart">
                <AiOutlineShoppingCart className='crt' size={"40px"} color="white"/>
                <span>My Cart</span>
                </Link>   
            </div>

            <img className='logo1' src={Logo1} alt="jfj" width={"50px"} height={"50px"} />
            
        </nav>
      
    </div>
  )
}

export default Navbar
