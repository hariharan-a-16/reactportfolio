import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import "./CartSidebar.css";

export default function CartSidebar() {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();

  return (
    <aside className="cart-sidebar">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">🛒 Your cart is empty</div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total ({getTotalItems()} items)</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
