import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../services/api/vendor";
import { cookie } from "../../services";
import Toast from "../../components/UI/Toast";

const initialState = {
  products: [],
  status: null,
  error: null,
  updated: 0,
  edited: "idle",
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
    await products.deleteProduct(userToken, id);
  }
);

//Update a product
export const updateProduct = createAsyncThunk(
  "vendor/updateProduct",
  async (data) => {
    const { _id, formData } = data;
    const userToken = cookie.getCookie("token");
    return await products.updateProduct(userToken, _id, formData);
  }
);

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  extraReducers: {
    // FetchVendorProducts
    [fetchVendorProducts.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchVendorProducts.fulfilled]: (state, { payload }) => {
      state.updated = payload.length;
      state.products = [...payload];
      state.status = "Fulfilled";
    },
    [fetchVendorProducts.rejected]: (state) => {
      state.status = "Rejected";
    },

    //AddProduct
    [addProduct.pending]: (state) => {
      state.status = "Pending";
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.updated++;
      state.products.push(payload);
      state.status = "Fulfilled";
      Toast.successToast("The Item has been Added!");
    },
    [addProduct.rejected]: (state) => {
      state.status = "Rejected";
      Toast.errorToast("Something Went Wrong!");
    },

    //DeleteProduct
    [deleteProduct.pending]: (state) => {
      state.status = "Pending";
    },
    [deleteProduct.fulfilled]: (state, { payload }) => {
      state.updated--;
      state.status = "Fulfilled";
      Toast.successToast("The Item has been Deleted!");
    },
    [deleteProduct.rejected]: (state) => {
      state.status = "Rejected";
      Toast.errorToast("Something Went Wrong!");
    },

    //UpdateProduct
    [updateProduct.pending]: (state) => {
      state.edited = "Pending";
      state.updated--;
    },
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.edited = "Fulfilled";
      state.updated++;
      Toast.successToast("The Item has been Updated!");
    },
    [updateProduct.rejected]: (state) => {
      state.edited = "Rejected";
      state.updated++;
      Toast.errorToast("Something Went Wrong!");
    },
  },
});

export const vendorSelector = (state) => state.vendor.products;
export const changeSelector = (state) => state.vendor.updated;
export const vendorStatusSelector = (state) => state.vendor.status;
export const editSelector = (state) => state.vendor.edited;
export default vendorSlice.reducer;
