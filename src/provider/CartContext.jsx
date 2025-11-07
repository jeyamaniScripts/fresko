import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const CartContext = createContext();

// 2️⃣ Create Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // ✅ calculate total amount automatically
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.offerPrice * item.quantity,
    0
  );
  // ➕ Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // If already in cart, increase quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Else add new item with quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🔄 Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      // Remove if quantity 0
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // 🗑️ Remove item
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3️⃣ Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
