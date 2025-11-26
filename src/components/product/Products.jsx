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
    dispatch(fetchByCategory("veg"));
  }, [dispatch]);

  if (loading) return <p className="text-center pt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 pt-10">{error}</p>;

  return (
    <div className="pt-4 px-5 md:px-16 lg:px-24 xl:px-32 text-gray-700">
      {/* Top Selling */}
      <div className="mb-6">
        <h1 className="sticky top-[70px] bg-white z-20 py-2 text-xl md:text-2xl font-semibold">
          Top Selling Products
        </h1>
        <ProductList products={topSelling} />
      </div>

      {/* Most Rated */}
      <div className="mb-6">
        <h1 className="sticky top-[70px] bg-white z-20 py-2 text-xl md:text-2xl font-semibold">
          Most Rated Products
        </h1>
        <ProductList products={mostRated} />
      </div>

      {/* Trending */}
      <div className="mb-6">
        <h1 className="sticky top-[70px] bg-white z-20 py-2 text-xl md:text-2xl font-semibold ">
          Trending Now
        </h1>
        <ProductList products={trending} />
      </div>

      {/* Best Discounts */}
      <div className="mb-6">
        <h1 className="sticky top-[70px] bg-white z-20 py-2 text-xl md:text-2xl font-semibold ">
          Best Discounts
        </h1>
        <ProductList products={bestDiscounts} />
      </div>
    </div>
  );
};

export default Products;
