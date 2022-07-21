import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartActions } from "./slices/cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
export { cartActions };
