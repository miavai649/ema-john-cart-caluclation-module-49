import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveBtn }) => {
  const { img, name, price, quantity, shipping, id } = product;
  return (
    <div className="review-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
            <p>{name}</p>
            <p><small>Price: <span className="money-amount">${price}</span></small></p>
            <p><small>Shipping Charge: <span className="money-amount">${shipping}</span></small></p>
            <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className="delete-container">
            <button onClick={()=>handleRemoveBtn(id)} className="delete-btn"><FontAwesomeIcon className="delete-icon" icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
