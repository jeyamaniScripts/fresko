import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Products = () => {
  const [fruitsProducts, setFruitProducts] = useState([]);
  const [vegetableProducts, setVegtableProducts] = useState([]);
  useEffect(() => {
    fetch("/fruits.json")
      .then((res) => res.json())
      .then((data) => setFruitProducts(data));
  }, []);

  useEffect(() => {
    fetch("/vegetables.json")
      .then((res) => res.json())
      .then((data) => setVegtableProducts(data));
  }, []);

  // console.log(fruitsProducts);
  // console.log(vegetableProducts);

  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <h1 class="text-3xl font-medium text-slate-800 text-center mb-2 font-poppins text-start">
        Vegtables{" "}
      </h1>
      <ProductList products={vegetableProducts} />
      <h1 class="text-3xl text-start font-medium text-slate-800 text-center mb-2 font-poppins">
        Fruits
      </h1>
      <ProductList products={fruitsProducts} />
    </div>
  );
};

export default Products;
