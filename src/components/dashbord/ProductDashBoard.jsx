import React, { useState } from "react";

export const ProductDashBoard = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Beetroot",
      category: "Vegetable",
      price: 50,
      offerPrice: 40,
      rating: 4,
      quantity: "1 kg",
      inStock: true,
      image: "/images/vegtable/beatroot.jpg",
    },
    {
      id: 2,
      name: "Brinjal",
      category: "Vegetable",
      price: 60,
      offerPrice: 45,
      rating: 4,
      quantity: "1 kg",
      inStock: true,
      image: "/images/vegtable/brinjal.jpg",
    },
    {
      id: 3,
      name: "Broccoli",
      category: "Vegetable",
      price: 120,
      offerPrice: 100,
      rating: 4.5,
      quantity: "500 g",
      inStock: true,
      image: "/images/vegtable/brocoli.jpg",
    },
    {
      id: 4,
      name: "Cabbage",
      category: "Vegetable",
      price: 40,
      offerPrice: 30,
      rating: 4,
      quantity: "1 pc",
      inStock: true,
      image: "/images/vegtable/cabbage.jpg",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  return (
    <>
      {/* Product Table */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-xl font-semibold text-green-600 mb-4">
          Product List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <thead className="bg-green-100">
              <tr className="text-left">
                <th className="p-2">Image</th>
                <th className="p-2">Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Price</th>
                <th className="p-2">Offer</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded"
                    />
                  </td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.category}</td>
                  <td className="p-2">₹{item.price}</td>
                  <td className="p-2">₹{item.offerPrice}</td>
                  <td className="p-2">{item.inStock ? "✅" : "❌"}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-gray-500">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
