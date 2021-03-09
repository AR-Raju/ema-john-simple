import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, img, key, price } = props.product;

  const reviwItemStyle = {
    borderBottom: "1px solid lightgray",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "200px",
  };
  return (
    <div style={reviwItemStyle}>
      <img src={img} alt="" />
      <h4 className="product-name">{name}</h4>
      <h4>Product quantity: {quantity}</h4>
      <p>
        <small>price: {price}</small>
      </p>
      <button onClick={() => props.removeProduct(key)} className="main-btn">
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
