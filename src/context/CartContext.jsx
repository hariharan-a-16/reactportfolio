import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const item = action.payload;
      const exists = state.find((i) => i.id === item.id);
      if (exists) {
        return state.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...state, { ...item, quantity: item.quantity || 1 }];
    }

    case ACTIONS.REMOVE_ITEM:
      return state.filter((i) => i.id !== action.payload);

    case ACTIONS.UPDATE_QUANTITY:
      const { id, quantity } = action.payload;
      if (quantity <= 0) return state.filter((i) => i.id !== id);
      return state.map((i) => (i.id === id ? { ...i, quantity } : i));

    case ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], (initial) => {
    const saved = localStorage.getItem("cart_state_v1");
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem("cart_state_v1", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
  const removeItem = (id) => dispatch({ type: ACTIONS.REMOVE_ITEM, payload: id });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
  const clearCart = () => dispatch({ type: ACTIONS.CLEAR_CART });

  const getTotalItems = () => cart.reduce((sum, i) => sum + i.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const value = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
