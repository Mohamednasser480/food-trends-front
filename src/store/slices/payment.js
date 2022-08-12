import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookie } from "../../services";
import paymentService from "../../services/api/payment";
let initialState = {
  paymentLink: "",
  isLoading: false,
  error: false,
};

export const doPayment = createAsyncThunk(
  "payment/doPayment",
  async (cartId) => {
    const userToken = cookie.getCookie("token");
    const data = await paymentService.doPayment(userToken);
    return data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: {
    [doPayment.pending]: (state) => {
      state.isLoading = true;
      state.error = "";
      state.paymentLink = "";
    },
    [doPayment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.paymentLink = payload;
      state.error = "";
    },
    [doPayment.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.paymentLink = "";
      state.error = error;
    },
  },
});

export default paymentSlice.reducer;
export const paymentSelector = (state) => state.payment;
