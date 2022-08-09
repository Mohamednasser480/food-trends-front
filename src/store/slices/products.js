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
  similiarProductsStatus:null,
  searchResult:[],
  searchResultStatus:null,
  filteredProducts:[],
  filteredProductsStatus:null
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

// Get Search Result Products
export const getSearchResult = createAsyncThunk(
  "products/getSearchResult",
  async (productName) => {
    return await products.getSearchResult(productName);
  }
);

// Get Search Result Products
export const getFilteredProducts=createAsyncThunk("products/getFilteredProducts",async (payload)=>{
  return await products.getFilteredProducts(payload)
})


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


    //getSearchResult
    [getSearchResult.pending]: (state) => {
      state.searchResultStatus = "Pending";
    },
    [getSearchResult.fulfilled]: (state, { payload }) => {
      state.searchResultStatus = "Fulfilled";
      state.searchResult = [...payload];
    },
    [getSearchResult.rejected]: (state) => {
      state.searchResultStatus = "Rejected";
    },

    //getFilteredProducts
    [getFilteredProducts.pending]: (state) => {
      state.filteredProductsStatus = "Pending";
    },
    [getFilteredProducts.fulfilled]: (state, { payload }) => {
      state.filteredProductsStatus = "Fulfilled";
      state.filteredProducts = [...payload];
    },
    [getFilteredProducts.rejected]: (state) => {
      state.filteredProductsStatus = "Rejected";
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
export const searchResultSelector=(state)=>state.products.searchResult;
export const searchResultStatusSelector=(state)=>state.products.searchResultStatus;
export const filteredProductsSelector=(state)=>state.products.filteredProducts;
export const filteredProductsStatusSelector=(state)=>state.products.filteredProductsStatus;
export default productsSlice.reducer;
