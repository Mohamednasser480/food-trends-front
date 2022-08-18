import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../services/api/vendor";
import { cookie } from "../../services";
import Toast from "../../components/UI/Toast";
import { toast } from "react-toastify";
import { getUserData } from "./auth";

const initialState = {
  products: [],
  orders: [],
  filters: { orderStatus: "all", prices: "" },
  status: null,
  error: null,
  updated: 0,
  edited: "idle",
  userProfileStatus: null,
};

//Get ALL Products of the Vendor
export const fetchVendorProducts = createAsyncThunk(
  "vendor/fetchProducts",
  async (_, thunkAPI) => {
    const vendorId = thunkAPI.getState().auth.user._id;
    return await products.getProducts(vendorId);
  }
);
export const fetchVendorOrders = createAsyncThunk(
  "vendor/fetchFilteredOrders",
  async (filters) => {
    const data = await products.getOrdersFiltered({ ...filters });
    return data;
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

export const updateProfileImage = createAsyncThunk(
  "vendor/updateProfile",
  async (formData, thunkAPI) => {
    const userToken = cookie.getCookie("token");
    // return await products.updateProfileImage(userToken, formData);
    const response = await toast.promise(
      products.updateProfileImage(userToken, formData),
      {
        pending: "The Image is being uploading",
        success: "the Image has been updated!",
        error: "Something went wrong",
      }
    );
    thunkAPI.dispatch(getUserData(userToken));
    return response;
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

    // FetchOrders
    [fetchVendorOrders.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchVendorOrders.fulfilled]: (state, { payload }) => {
      state.orders = [...payload];
      state.status = "Fulfilled";
    },
    [fetchVendorOrders.rejected]: (state) => {
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

    // Update Profile Image
    [updateProfileImage.pending]: (state) => {
      state.userProfileStatus = "Pending";
    },
    [updateProfileImage.fulfilled]: (state, { payload }) => {
      state.userProfileStatus = "Fulfilled";
    },
    [updateProfileImage.rejected]: (state) => {
      state.userProfileStatus = "Rejected";
    },
  },
});

export const vendorSelector = (state) => state.vendor.products;
export const ordersSelector = (state) => state.vendor.orders;
export const changeSelector = (state) => state.vendor.updated;
export const imageProfileSelector = (state) => state.vendor.userProfileStatus;
export const vendorStatusSelector = (state) => state.vendor.status;
export const editSelector = (state) => state.vendor.edited;

export const filteredOrdersSelector = (state) => state.orders.filters;

export default vendorSlice.reducer;
