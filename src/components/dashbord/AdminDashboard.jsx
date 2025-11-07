import React, { useState } from "react";

const AdminDashboard = () => {
  // Dummy product data
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
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    offerPrice: "",
    image: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  // Handle image upload (preview)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm({ ...form, image: imageUrl });
    }
  };

  // Add product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Please fill all fields");

    const newProduct = {
      id: Date.now(),
      name: form.name,
      category: form.category || "General",
      price: Number(form.price),
      offerPrice: Number(form.offerPrice),
      inStock: true,
      image: form.image || "https://via.placeholder.com/100",
    };

    setProducts([...products, newProduct]);
    setForm({
      name: "",
      description: "",
      category: "",
      price: "",
      offerPrice: "",
      image: "",
    });
  };

  // Delete product
  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // Sidebar icons
  const dashboardicon = (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinejoin="round"
        d="M4 5a1 1 0 0 1 1-1h4v3H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4v-3h4a1 1 0 0 1 1 1v1ZM4 13a1 1 0 0 1 1-1h4v7H5a1 1 0 0 1-1-1v-5Zm16-2a1 1 0 0 1-1 1h-4V4h4a1 1 0 0 1 1 1v6Z"
      />
    </svg>
  );

  const overviewicon = (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12h5v12A3.111 3.111 0 0 1 7.111 20Zm12 0h-12a.889.889 0 0 1-.889-.889v-4.444h6.616a1 1 0 0 1 .67.257l2.88 2.592A.5.5 0 0 0 20 18.477V17a1 1 0 0 0 1-1v3a.889.889 0 0 1-.889.889Z"
      />
    </svg>
  );

  const chaticon = (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14v10H8l-3 3v-3H5V5Z"
      />
    </svg>
  );

  const sidebarLinks = [
    { name: "Dashboard", path: "/", icon: dashboardicon },
    { name: "Overview", path: "/overview", icon: overviewicon },
    { name: "Chat", path: "/chat", icon: chaticon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="md:w-64 w-16 border-r h-auto text-base border-gray-200 pt-4 flex flex-col bg-white shadow-sm">
        {sidebarLinks.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className={`flex items-center py-3 px-4 gap-3 transition-all duration-300 ${
              index === 0
                ? "border-r-4 md:border-r-[6px] bg-green-50 border-green-500 text-green-600"
                : "hover:bg-green-50 text-gray-700"
            }`}
          >
            {item.icon}
            <p className="md:block hidden">{item.name}</p>
          </a>
        ))}
      </div>

      {/* Main Section */}
      <div className="flex-1 py-10 px-4 md:px-10 space-y-10">
        {/* Add Product Form */}
        <form
          onSubmit={handleAddProduct}
          className="p-6 space-y-5 max-w-2xl bg-white rounded-lg shadow border border-gray-200 mx-auto"
        >
          <h1 className="text-2xl font-semibold text-green-600 text-center">
            Add New Product
          </h1>

          {/* Image Upload */}
          <div>
            <p className="text-base font-medium">Product Image</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <label htmlFor="image">
                <input
                  accept="image/*"
                  type="file"
                  id="image"
                  hidden
                  onChange={handleImageUpload}
                />
                <img
                  className="max-w-24 cursor-pointer border rounded"
                  src={
                    form.image ||
                    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                  }
                  alt="upload"
                  width={100}
                  height={100}
                />
              </label>
            </div>
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="name">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="outline-none py-2 px-3 rounded border border-gray-400/50"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="outline-none py-2 px-3 rounded border border-gray-400/50"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Spices">Spices</option>
            </select>
          </div>

          {/* Price Fields */}
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-base font-medium" htmlFor="price">
                Product Price
              </label>
              <input
                id="price"
                type="number"
                placeholder="0"
                className="outline-none py-2 px-3 rounded border border-gray-400/50"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-base font-medium" htmlFor="offerPrice">
                Offer Price
              </label>
              <input
                id="offerPrice"
                type="number"
                placeholder="0"
                className="outline-none py-2 px-3 rounded border border-gray-400/50"
                value={form.offerPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
