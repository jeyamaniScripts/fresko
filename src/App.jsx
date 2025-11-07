import React from "react";
import NavBar from "./components/nav/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./components/product/Products";
import Product from "./components/product/Product";
import AddToCart from "./components/product/AddToCart";
import Banner from "./components/Banner";
import ProductDetail from "./components/product/ProductDetail";
import AdminDashboard from "./components/dashbord/AdminDashboard";
import ProtectedRoute from "./components/dashbord/ProductedRoute";
const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product/addtocart" element={<AddToCart />} />
          {/* ✅ Admin-only route */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute roleRequired="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
