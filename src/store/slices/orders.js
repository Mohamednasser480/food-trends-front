import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orders from "../../services/api/orders";
import { cookie } from "../../services";
import {clearCartData} from "./cart"
const initialState = {
  orders: [],
  status: null,
  error: null,
};

//Get All Orders
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const userToken = cookie.getCookie("token");
  return await orders.getAllOrders(userToken);
});

//Create New Order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (cartData, thunkAPI) => {
    const userToken = cookie.getCookie("token");
    const order = await orders.createOrder(userToken,cartData);
    // thunkAPI.dispatch(clearCartData());
    return order;
  }
  );

  //SaveOrder
export const saveOrder = createAsyncThunk(
  "orders/saveOrder",
  async (cartData, thunkAPI) => {
    const userToken = cookie.getCookie("token");
    const order = await orders.saveOrder(userToken,cartData);
    thunkAPI.dispatch(clearCartData());
    return order;
  }
);

//Delete an Order
export const deleteOrder = createAsyncThunk(
  "orders/createOrder",
  async (data) => {
    const userToken = cookie.getCookie("token");
    return await orders.deleteOrder(userToken, data);
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: {
    //FetchOrders
    [fetchOrders.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchOrders.fulfilled]: (state, { payload }) => {
      state.status = "Fulfilled";
      state.orders = [...payload];
    },
    [fetchOrders.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const ordersSelector = (state) => state.orders;
export const ordersStateSelector = (state) => state.status;
export default ordersSlice.reducer;
