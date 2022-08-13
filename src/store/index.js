import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { authReducer } from "./slices/auth";
import orderReducer from "./slices/orders";
import productReducer from "./slices/products";
import reviewsReducer from "./slices/reviews";
import vendorReducer from "./slices/vendor";
import paymentReducer from "./slices/payment"
import categoryReducer from "./slices/category"
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
    products: productReducer,
    reviews: reviewsReducer,
    vendor: vendorReducer,
    payment:paymentReducer,
    category:categoryReducer
  },
});

export default store;
