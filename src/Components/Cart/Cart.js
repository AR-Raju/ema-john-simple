import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  //   const total = cart.reduce((total, prd) => total + prd.price, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += product.price;
  }

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 12) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const formatNumber = (num) => {
    const precission = num.toFixed(2);
    return Number(precission);
  };
  const tax = total / 10;
  const grand = formatNumber(total + tax + shipping);
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>
        <small>shipping charge: {shipping}</small>
      </p>
      <p>
        <small>Tax + VAT: {formatNumber(tax)}</small>
      </p>
      <p>Total Price: {grand}</p>
    </div>
  );
};

export default Cart;