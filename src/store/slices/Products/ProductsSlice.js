import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../../services/api/productService";

const initialState = {
  products: {},
  status: "idle", // "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

//Get All Available Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await products.getAllProducts();
  }
);

//Get a product By Id
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    return await products.getProductById(id);
  }
);

//Get a product reviews By Id
export const getProductReviews = createAsyncThunk(
  "products/getProductReviews",
  async (id) => {
    return await products.getProductReviews(id);
  }
);

// Get most Similar products By Id
export const getMostSimilar = createAsyncThunk(
  "products/getMostSimilar",
  async (id) => {
    return await products.getMostSimilar(id);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = [...payload];
    });
    builder.addCase(getProductById.fulfilled, (state, { payload }) => {
      state.products = [...payload];
    });
    builder.addCase(getProductReviews.fulfilled, (state, { payload }) => {
      state.products = [...payload];
    });
    builder.addCase(getMostSimilar.fulfilled, (state, { payload }) => {
      state.products = [...payload];
    });
  },
});

export const getAllProducts = (state) => state.products.products;
export default productsSlice.reducer;
