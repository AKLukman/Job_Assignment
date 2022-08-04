import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, stock, img, price, seller } = props.product;
  return (
    <div className="products-container">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button
          //   onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular"
        >
          add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
