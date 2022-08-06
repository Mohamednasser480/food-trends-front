import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:3000/api/v1/orders";

const initialState = {};

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axios.get(USERS_URL, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVhOWZkOThlOTU5NmJiMGU3YWE4NTYiLCJpYXQiOjE2NTk1NDM1MTMsImV4cCI6MTY1OTgwMjcxM30.VV0MAHu5FFXfFicTtSUdFCr1zQm03Eqwdv3YLkwKjcA",
    },
  });
  console.log(response.data);
  return response.data;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const getAllOrders = (state) => state.orders;
export default ordersSlice.reducer;
