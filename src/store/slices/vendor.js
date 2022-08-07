import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../services/api/vendor";
import { cookie } from "../../services";

const initialState = {
  products: [],
  status: null,
  error: null,
};

//Get ALL Products of the Vendor
export const fetchVendorProducts = createAsyncThunk(
  "vendor/fetchProducts",
  async (vendorId) => {
    return await products.getProducts(vendorId);
  }
);

//Add Product to database of the vendor
export const addProduct = createAsyncThunk(
  "vendor/addProduct",
  async (data) => {
    const userToken = cookie.getCookie("token");
    return await products.saveProduct(userToken, data);
  }
);

//Delete a product
export const deleteProduct = createAsyncThunk(
  "vendor/deleteProduct",
  async (id) => {
    const userToken = cookie.getCookie("token");
    return await products.deleteProduct(userToken, id);
  }
);

//Update a product
export const updateProduct = createAsyncThunk(
  "vendor/updateProduct",
  async (id, data) => {
    const userToken = cookie.getCookie("token");
    return await products.updateProduct(userToken, id, data);
  }
);

const productsSlice = createSlice({
  name: "vendor",
  initialState,
  extraReducers: {
    [fetchVendorProducts.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchVendorProducts.fulfilled]: (state, { payload }) => {
      state.status = "Fulfilled";
      state.products = [...payload];
    },
    [fetchVendorProducts.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const vendorSelector = (state) => state.vendor.products;
export const vendorStatusSelector = (state) => state.status;
export default productsSlice.reducer;
