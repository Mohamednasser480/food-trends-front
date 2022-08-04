import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartActions } from "./slices/cart";
import orderReducer from "./Orders/OrdersSlice";
import productReducer from "./Products/ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    products: productReducer,
  },
});

export default store;
export { cartActions };
