import React from "react";
import { useCart } from "../../provider/CartContext";

const AddToCart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();
  const [showAddress, setShowAddress] = React.useState(false);

  // 💰 Sample discount & shipping calculation
  const discount = totalAmount > 100 ? 10 : 5;
  const shipping = totalAmount > 200 ? 0 : 20;
  const finalTotal = totalAmount - discount + shipping;

  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto bg-teal-50 min-h-screen">
      {/* 🛒 Cart Section */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-medium mb-6">
          Shopping Cart{" "}
          <span className="text-sm text-teal-500">
            {cartItems.length} Items
          </span>
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 mt-10">Your cart is empty 🛒</p>
        ) : (
          <div className="space-y-4 p-4">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[2fr_1fr_1fr] items-center text-gray-700 text-sm md:text-base font-medium border border-gray-300 rounded-lg px-4 py-3 hover:border-teal-500 hover:bg-white transition-colors duration-300"
              >
                {/* 🖼️ Product Info */}
                <div className="flex items-center md:gap-6 gap-3">
                  <div className="w-24 h-24 border border-gray-300 rounded overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">Qty:</p>
                    <select
                      value={product.quantity}
                      onChange={(e) =>
                        updateQuantity(product.id, e.target.value)
                      }
                      className="outline-none border border-gray-300 rounded px-1"
                    >
                      {Array(5)
                        .fill("")
                        .map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* 💵 Price */}
                <p className="text-center font-medium">
                  ${product.offerPrice * product.quantity}
                </p>

                {/* ❌ Remove Button */}
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="cursor-pointer mx-auto hover:text-red-500 transition"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 📦 Order Summary */}
      <div className="max-w-[360px] w-full bg-white p-5 max-md:mt-16 border border-gray-300/70 rounded-lg shadow-sm">
        <h2 className="text-xl md:text-xl font-semibold mb-4">Order Summary</h2>
        <hr className="border-gray-300 mb-4" />

        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between text-base">
            <span>Subtotal</span>
            <span>${totalAmount?.toFixed(2) || "0.00"}</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Discount</span>
            <span className="text-green-600">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <hr className="border-gray-300 my-3" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-teal-600">${finalTotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => setShowAddress(true)}
          className="w-full py-3 mt-6 bg-teal-500 text-white font-medium hover:bg-teal-600 transition rounded-lg"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
