import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const clearCart = () => {
    setCart([])
    deleteShoppingCart()
  };

  const handleRemoveBtn = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  };
  return (
    <div>
      <div className="shop-container">
        <div className="orders-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveBtn={handleRemoveBtn}
            ></ReviewItem>
          ))}
          {
            cart.length === 0 && <h2>No Items For Review. Please <Link to="/">SHOPE MORE</Link></h2>
          }
        </div>
        <div className="cart-container">
          <Cart clearCart={clearCart} cart={cart}>
          <Link to="/"><button className="review-btn">Order More</button></Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
