import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products = [] }) => {
  if (!products.length) return null; // hide section if no products

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center mt-5">
      {products.map((item) => (
        <ProductCard key={item._id || item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
