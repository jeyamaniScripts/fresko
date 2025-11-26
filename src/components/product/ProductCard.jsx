import React from "react";
import { FiHeart } from "react-icons/fi";
import { useCart } from "../../provider/CartContext"; // 🔥 Keep old cart logic
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  // Products from API use _id (not id)
  const productId = product._id || product.id;

  const cartItem = cartItems.find(
    (item) => item._id === productId || item.id === productId
  );
  const count = cartItem ? cartItem.quantity : 0;

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-2 relative hover:shadow-md transition-all">
      {/* WISHLIST ICON */}
      <button className="absolute top-3 right-3 bg-white shadow-sm p-1.5 rounded-full">
        <FiHeart size={16} className="text-gray-500" />
      </button>

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 sm:h-40 object-cover rounded-lg"
      />

      <div className="flex justify-between">
        <p className="text-sm font-semibold mt-2 text-gray-800">
          {product.name}
        </p>

        <div className="mt-1">
          <span className="text-green-600 font-bold text-[15px]">
            ₹{product.offerPrice}
          </span>
          <span className="line-through text-gray-400 text-[12px] ml-1">
            ₹{product.price}
          </span>
        </div>
      </div>

      {/* CART BUTTON */}
      <div className="mt-2">
        {count === 0 ? (
          <button
            className="w-full bg-green-100 text-green-600 font-semibold py-1 rounded-md border border-green-300 text-sm"
            onClick={() =>
              addToCart({ ...product, id: productId, _id: productId })
            }
          >
            Add
          </button>
        ) : (
          <div className="flex items-center justify-between bg-green-100 border border-green-300 rounded-md py-1 px-2">
            <button
              onClick={() => updateQuantity(productId, Math.max(count - 1, 0))}
              className="text-green-600 text-lg"
            >
              -
            </button>
            <span className="text-green-700 font-semibold">{count}</span>
            <button
              onClick={() => updateQuantity(productId, count + 1)}
              className="text-green-600 text-lg"
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
