import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ quantity }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="cart-widget-quantity">{quantity}</span>
    </div>
  );
};

export default CartWidget;
