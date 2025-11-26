import React, { useEffect } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBestDiscounts,
  fetchMostRated,
  fetchTopSelling,
  fetchTrending,
  fetchByCategory,
} from "../../redux/features/product/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const {
    topSelling,
    mostRated,
    trending,
    bestDiscounts,
    categoryProducts,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchTopSelling());
    dispatch(fetchMostRated());
    dispatch(fetchTrending());
    dispatch(fetchBestDiscounts());
    dispatch(fetchByCategory("veg")); // example category (you can change later)
  }, [dispatch]);

  if (loading) return <p className="text-center pt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 pt-10">{error}</p>;

  return (
    <div className="pt-8 px-5 md:px-16 lg:px-24 xl:px-32 text-gray-700">
      {/* Top Selling */}
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-slate-800">
        Top Selling Products
      </h1>
      <ProductList products={topSelling} />

      {/* Most Rated */}
      <h1 className="text-xl md:text-2xl mt-6 font-semibold mb-2 text-slate-800">
        Most Rated Products
      </h1>
      <ProductList products={mostRated} />

      {/* Trending */}
      <h1 className="text-xl md:text-2xl mt-6 font-semibold mb-2 text-slate-800">
        Trending Now
      </h1>
      <ProductList products={trending} />

      {/* Best Discounts */}
      <h1 className="text-xl md:text-2xl mt-6 font-semibold mb-2 text-slate-800">
        Best Discounts
      </h1>
      <ProductList products={bestDiscounts} />
      <ProductList products={categoryProducts} />
    </div>
  );
};

export default Products;
