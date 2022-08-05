import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { authReducer } from "./slices/auth";
import orderReducer from "./Orders/OrdersSlice";
import productReducer from "./Products/ProductSlice";
import reviewsReducer from "./slices/reviews";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
    products: productReducer,
    reviews: reviewsReducer,
  },
});

export default store;
