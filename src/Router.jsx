import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ProductSection from "./components/product/ProductSection";
import ProductDetail from "./components/product/ProductDetail";
import AddToCart from "./components/product/AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/product/:productd",
        element: <ProductDetail />,
      },
      {
        path: "/product/addtocart",
        element: <AddToCart />,
      },
    ],
  },
]);

export default router;
