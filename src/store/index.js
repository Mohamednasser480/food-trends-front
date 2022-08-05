import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartActions } from "./slices/cart";
import orderReducer from "./Orders/OrdersSlice";
import productReducer from "./slices/Products/ProductsSlice";
import vendorReducer from "./slices/Vendor/VendorSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    products: productReducer,
    vendor: vendorReducer,
  },
});

export default store;
export { cartActions };
