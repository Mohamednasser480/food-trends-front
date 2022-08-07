import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../services/api/product";

const initialState = {
  products: [],
  currentProduct: {},
  currentReviews: [],
  similiarProducts:[],
  status: null,
  error: null,
  currentProductStatus:null,
  similiarProductsStatus:null
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
  async (category) => {
    return await products.getMostSimilar(category);
  }
);

// Get Featured products By Id
export const getFeaturedProducts = createAsyncThunk(
  "products/getFeaturedProducts",
  async () => {
    return await products.getFeaturedProducts();
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
      state.currentProductStatus = "Pending";
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.currentProductStatus = "Fulfilled";
      state.currentProduct = payload;
    },
    [getProductById.rejected]: (state) => {
      state.currentProductStatus = "Rejected";
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
      state.similiarProductsStatus = "Pending";
    },
    [getMostSimilar.fulfilled]: (state, { payload }) => {
      state.similiarProductsStatus = "Fulfilled";
      state.similiarProducts = [...payload];
    },
    [getMostSimilar.rejected]: (state) => {
      state.similiarProductsStatus = "Rejected";
    },

    //getFeaturedProducts
    [getFeaturedProducts.pending]: (state) => {
      state.status = "Pending";
    },
    [getFeaturedProducts.fulfilled]: (state, { payload }) => {
      state.status = "Fulfilled";
      state.products = [...payload];
    },
    [getFeaturedProducts.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const productsSelector = (state) => state.products.products;
export const similarProductsSelector = (state) => state.products.similiarProducts;
export const currentProductSelector = (state) => state.products.currentProduct;
export const currentReviewsSelector = (state) => state.products.currentReviews;
export const productsStatusSelector=(state)=>state.products.status;
export const currentProductStatusSelector=(state)=>state.products.currentProductStatus;
export const similarProductsStatusSelector=(state)=>state.products.similiarProductsStatus;
export default productsSlice.reducer;
