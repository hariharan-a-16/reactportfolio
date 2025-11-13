import React from "react";
import "./ProductList.css";
import { useCart } from "../context/CartContext";

const PRODUCTS = [
  {
    id: "p1",
    title: "Nike Air Sneakers",
    price: 3999,
    image:
      "https://static.nike.com/a/images/t_default/a42a5d53-2f99-4e78-a081-9d07a2d0774a/AIR+FORCE+1+%2707.png",
  },
  {
    id: "p2",
    title: "Denim Jacket",
    price: 2999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkHjWq5J5SxhfypzGH9k2UNlZX88oPA5Luw&s",
  },
  {
    id: "p3",
    title: "Ray-Ban Sunglasses",
    price: 2499,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: "p4",
    title: "Casio Watch",
    price: 4999,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29750838/2024/5/24/3ebe6d03-de44-42e6-a441-7ecb220bbabc1716551984986CASIOUnisexPrintedDialStainlessSteelWrapAroundStrapsDigitalC1.jpg",
  },
  {
    id: "p5",
    title: "Adidas Hoodie",
    price: 1999,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/59460fb0bd584daa88fe9a383d088a9b_9366/Z.N.E._Hoodie_White_JF2454_21_model.jpg",
  },
];

export default function ProductList() {
  const { addItem } = useCart();

  return (
    <div>
      <h2 className="product-heading">Featured Products</h2>
      <div className="product-list">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>₹{p.price.toFixed(2)}</p>
            <button onClick={() => addItem({ ...p, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
