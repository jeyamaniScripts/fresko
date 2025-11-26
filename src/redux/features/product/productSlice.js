import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fresko-back.onrender.com/api/products";

// ----------- API Calls --------------
export const fetchTopSelling = createAsyncThunk(
  "products/fetchTopSelling",
  async () => {
    const res = await axios.get(`${BASE_URL}/top-selling`);
    return res.data;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
  }
);

export const fetchMostRated = createAsyncThunk("", async () => {
  const res = await axios.get(`${BASE_URL}/most-rated`);
  return res.data;
});

export const fetchTrending = createAsyncThunk(
  "products/fetchTrending",
  async () => {
    const res = await axios.get(`${BASE_URL}/trending`);
    return res.data;
  }
);

export const fetchBestDiscounts = createAsyncThunk(
  "products/fetchBestDiscounts",
  async () => {
    const res = await axios.get(`${BASE_URL}/best-discounts`);
    return res.data;
  }
);

export const fetchByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category) => {
    const res = await axios.get(`${BASE_URL}/category/${category}`);
    return res.data;
  }
);

// --------- Slice -------------
const productSlice = createSlice({
  name: "products",
  initialState: {
    topSelling: [],
    mostRated: [],
    trending: [],
    bestDiscounts: [],
    categoryProducts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchTopSelling.fulfilled, (state, action) => {
        state.loading = false;
        state.topSelling = action.payload;
      })
      .addCase(fetchMostRated.fulfilled, (state, action) => {
        state.loading = false;
        state.mostRated = action.payload;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
      })
      .addCase(fetchBestDiscounts.fulfilled, (state, action) => {
        state.loading = false;
        state.bestDiscounts = action.payload;
      })
      .addCase(fetchByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryProducts = action.payload;
      })

      // ---- Pending matcher ALWAYS after addCase ----
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      // ---- Rejected matcher MUST be last ----
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default productSlice.reducer;
