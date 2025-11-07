import React from "react";
import { useCart } from "../../provider/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  const cartItem = cartItems.find((item) => item.id === product.id);
  const count = cartItem ? cartItem.quantity : 0;

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm bg-white w-full max-w-[230px] p-2 hover:shadow-md transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-md"
      />
      <p className="text-base font-semibold mt-3 text-gray-800">
        {product.name}
      </p>

      <div className="flex items-end justify-between mt-3">
        <p className="text-lg font-semibold text-green-600">
          ${product.offerPrice}
          <span className="text-gray-400 line-through text-sm ml-1">
            ${product.price}
          </span>
        </p>

        {count === 0 ? (
          <button
            className="bg-green-100 border border-green-300 px-3 py-1.5 rounded-md text-green-600 font-medium hover:bg-green-200 transition"
            onClick={() => addToCart(product)}
          >
            Add
          </button>
        ) : (
          <div className="flex items-center bg-green-500/20 rounded-md">
            <button
              onClick={() => updateQuantity(product.id, Math.max(count - 1, 0))}
              className="px-2 text-lg font-semibold text-green-700"
            >
              -
            </button>
            <span className="w-6 text-center text-green-800">{count}</span>
            <button
              onClick={() => updateQuantity(product.id, count + 1)}
              className="px-2 text-lg font-semibold text-green-700"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
