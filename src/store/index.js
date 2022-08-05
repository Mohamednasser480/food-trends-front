import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartActions } from "./slices/cart";
import orderReducer from "./Orders/OrdersSlice";
import productReducer from "./slices/Products/ProductsSlice";
import vendorReducer from "./slices/Vendor/VendorSlice";
import reviewsReducer from "./slices/reviews";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    products: productReducer,
    reviews: reviewsReducer,
    vendor: vendorReducer,
  },
});

export default store;
export { cartActions };
