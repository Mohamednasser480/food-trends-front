import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { authReducer } from "./slices/auth";
import orderReducer from "./slices/orders";
import productReducer from "./slices/products";
import reviewsReducer from "./slices/reviews";
import vendorReducer from "./slices/vendor";
import paymentReducer from "./slices/payment";
import deliveryReducer from "./slices/delivery";
import categoryReducer from "./slices/category";
import usersReducer from "./slices/admin";
import adminProductsReducer from "./slices/adminProducts";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
    products: productReducer,
    reviews: reviewsReducer,
    vendor: vendorReducer,
    delivery: deliveryReducer,
    payment: paymentReducer,
    category: categoryReducer,
    users: usersReducer,
    adminProducts: adminProductsReducer,
  },
});

export default store;
