import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import happyImage from "../../images/giphy.gif";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };

  const removeProduct = (productkey) => {
    const newCart = cart.filter((pd) => pd.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey);
  };
  useEffect(() => {
    //cart
    const savedCart = getDatabaseCart();
    const productkeys = Object.keys(savedCart);
    const cardProducts = productkeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cardProducts);
  }, []);
  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyImage} alt="" />;
  }
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            removeProduct={removeProduct}
            key={pd.key}
            product={pd}
          ></ReviewItem>
        ))}
        {thankyou}
      </div>
      <div className="card-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="main-btn">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
