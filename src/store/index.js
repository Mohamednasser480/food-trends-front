import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { authReducer } from "./slices/auth";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
