import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div>
      <div className="card">
        <div>
          <img src="./assets/tshirt.png" alt="TShirt" className="card-img" />
          <span className="rating">4.3</span>
        </div>
        <h3 className="card-heading">Roadster</h3>
        <p className="card-discption">Casual Tshirt best for summers pure</p>
        <h4 className="price">$ 100</h4>
        <button className="buy-button">Buy</button>
        <button className="cart-button">Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
