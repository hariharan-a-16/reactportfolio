import React from "react";
import { useCart } from "../context/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>₹{item.price.toFixed(2)} each</p>
      </div>
      <div className="cart-controls">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <div className="cart-qty">{item.quantity}</div>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <div className="cart-price">₹{(item.price * item.quantity).toFixed(2)}</div>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}
