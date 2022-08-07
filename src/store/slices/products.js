import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../services/api/product";

const initialState = {
  products: [],
  currentProduct: {},
  currentReviews: [],
  status: null,
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
  extraReducers: {
    //FetchProducts
    [fetchProducts.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.status = "Fulfilled";
      state.products = [...payload];
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "Rejected";
    },

    //GetProductById
    [getProductById.pending]: (state) => {
      state.status = "Pending";
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.status = "Fulfilled";
      state.currentProduct = payload;
    },
    [getProductById.rejected]: (state) => {
      state.status = "Rejected";
    },

    //GetProductReviews
    [getProductReviews.pending]: (state) => {
      state.status = "Pending";
    },
    [getProductReviews.fulfilled]: (state, { payload }) => {
      state.status = "Fulfilled";
      state.currentReviews = payload;
    },
    [getProductReviews.rejected]: (state) => {
      state.status = "Rejected";
    },

    //GetMostSimilar
    [getMostSimilar.pending]: (state) => {
      state.status = "Pending";
    },
    [getMostSimilar.fulfilled]: (state, { payload }) => {
      state.status = "Fulfilled";
      state.products = [...payload];
    },
    [getMostSimilar.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const productsSelector = (state) => state.products.products;
export const currentProductSelector = (state) => state.products.currentProduct;
export const currentReviewsSelector = (state) => state.products.currentReviews;

export default productsSlice.reducer;
