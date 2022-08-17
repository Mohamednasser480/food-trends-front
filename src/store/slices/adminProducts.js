import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminProductsService from "../../services/api/adminProducts";
const initialState = {
  products: [],
  count: 0,
  isLoading: false,
  error: false,
  currentPage: 1,
  filterObject: { available: "", name: "" },
};

export const getProducts = createAsyncThunk(
  "adminProducts/getProducts",
  async (filters) => {
    try {
      const data = await adminProductsService.getProducts(filters);
      return { data, filters };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const paginateProducts = createAsyncThunk(
  "adminProducts/paginateProducts",
  async (args, thunkAPI) => {
    try {
      const filters = thunkAPI.getState().adminProducts.filterObject;
      const data = await adminProductsService.paginateProducts(args, filters);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const approveProduct = createAsyncThunk(
  "adminProducts/approveProduct",
  async (productId) => {
    try {
      const data = await adminProductsService.approveProduct(productId);
      return productId;
    } catch (error) {
      throw error;
    }
  }
);

export const deactivateProduct = createAsyncThunk(
  "adminProducts/deactivateProduct",
  async (productId) => {
    try {
      const data = await adminProductsService.deactivateProduct(productId);
      return productId;
    } catch (error) {
      throw error;
    }
  }
);



const adminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.products = [];
      state.isLoading = true;
      state.error = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data.data;
      state.count = action.payload.data.count;
      state.error = false;
      state.filterObject = action.payload.filters;
      state.currentPage = 1;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error;
    },
    // paginateProducts
    [paginateProducts.pending]: (state) => {
      state.products = [];
      state.isLoading = true;
      state.error = false;
    },
    [paginateProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data.data;
      state.count = action.payload.data.count;
      state.error = false;
      state.currentPage = action.payload.currentPage;
    },
    [paginateProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error;
    },

    // Approve Product
    [approveProduct.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [approveProduct.fulfilled]: (state, action) => {
      // Make new Array of Products
      const productsAfterApprove = state.products.map((prod) => {
        if (prod._id == action.payload) {
          return {
            ...prod,
            available: "true",
          };
        } else {
          return { ...prod };
        }
      });
      state.isLoading = false;
      state.products = productsAfterApprove;
      state.error = false;
    },
    [approveProduct.rejected]: (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    },

    // deactivate Product
    [deactivateProduct.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [deactivateProduct.fulfilled]: (state, action) => {
      // Make new Array of Products
      const productsAfterDeactivate = state.products.map((prod) => {
        if (prod._id == action.payload) {
          
          return {
            ...prod,
            available: "false",
          };
        } else {
          return { ...prod };
        }
      });
      state.isLoading = false;
      state.products = productsAfterDeactivate;
      state.error = false;
    },
    [deactivateProduct.rejected]: (state, action) => {
      state.isLoading = false;
      // state.error = action.error;
    },
  },
});

export default adminProductsSlice.reducer;
export const adminProductsSelector = (state) => state.adminProducts;
