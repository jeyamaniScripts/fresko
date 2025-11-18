import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../provider/CartContext";

const Products = () => {
  const [fruits, setFruits] = useState([]);
  const [veggies, setVeggies] = useState([]);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((a, b) => a + b.quantity, 0);

  useEffect(() => {
    fetch("/fruits.json").then((res) =>
      res.json().then((data) => setFruits(data))
    );
    fetch("/vegetables.json").then((res) =>
      res.json().then((data) => setVeggies(data))
    );
  }, []);

  return (
    <div className="pt-8 px-5 md:px-16 lg:px-24 xl:px-32 text-gray-700">
      {/* Vegetables */}
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-slate-800">
        Fresh Vegetables for You
      </h1>
      <ProductList products={veggies} />

      {/* Fruits */}
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-slate-800">
        Fresh & Juicy Fruits
      </h1>
      <ProductList products={fruits} />
    </div>
  );
};

export default Products;
