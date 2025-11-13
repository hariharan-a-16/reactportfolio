import React from "react";
import { useCart } from "../context/CartContext";

export default function CartSummary() {
  const { getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="text-sm text-right">
      <div>Items: {getTotalItems()}</div>
      <div>Total: ₹{getTotalPrice().toFixed(2)}</div>
    </div>
  );
}
