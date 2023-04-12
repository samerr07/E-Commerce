import React from 'react'
import {PRODUCTS} from "../products"
import Product from './Product'
import "./shop.scss";

const Shop = () => {
  return (
    <div className="shop">
        <div className="title">
            <h1>All Products</h1>
        </div>
        <div className="products">
            {" "}
            {PRODUCTS.map((product) => (
              <Product data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop
