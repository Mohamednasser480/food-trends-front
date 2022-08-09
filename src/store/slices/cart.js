import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../services/api";
import { cookie } from "../../services";

const initialState = {
  id: "",
  products: [],
  cartPrice: 0,
  status: "idle", // "idle" | "loading" | "succeeded" | "error",
  error: null,
};

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async () => {
    const userToken = cookie.getCookie("token");
    if (!userToken) {
      return await new Promise((resolve) => {
        setTimeout(() => {
          const cart = localStorage.getItem("cart") || initialState;
          resolve(cart);
        }, 500);
      });
    }
    return await cartService.getCartData(userToken);
  }
);

export const updateCartItems = createAsyncThunk(
  "cart/saveCartItems",
  async (cartItems) => {
    return await cartService.updateCartData(cartItems);
  }
);

export const clearCartData = createAsyncThunk(
  "cart/clearCartItems",
  async () => {
    const userToken = cookie.getCookie("token");
    return await cartService.updateCartData(userToken, {
      products: [],
      cartPrice: 0,
    });
  }
);

export const saveCartItem = createAsyncThunk("cart/saveCartItem", (payload) => {
  const userToken = cookie.getCookie("token");
  return cartService.postCartItem(userToken, payload.product, payload.quantity);
});

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  (payload) => {
    const userToken = cookie.getCookie("token");
    return cartService.updateCartItem(
      userToken,
      payload.product,
      payload.quantity
    );
  }
);

export const deleteCartItem = createAsyncThunk("cart/deleteCartItem", (id) => {
  const userToken = cookie.getCookie("token");
  return cartService.deleteCartItem(userToken, id);
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: {
      reducer(state, { payload: updatedItem }) {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === updatedItem.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        if (!existingCartItem) {
          state.items.push(updatedItem);
          state.totalPrice += updatedItem.price * updatedItem.quantity;
        } else {
          state.total +=
            (updatedItem.quantity - existingCartItem.quantity) *
            updatedItem.price;
          state.items[existingCartItemIndex].quantity = updatedItem.quantity;
        }
      },
      prepare(id, name, image, price, stock, quantity) {
        return {
          payload: {
            id,
            name,
            image,
            price,
            stock,
            quantity,
          },
        };
      },
    },
    updateCartItem: {
      reducer(state, { payload }) {
        const { id, newQuantity } = payload;
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        console.log(existingCartItemIndex);
        state.total +=
          (newQuantity - existingCartItem.quantity) * existingCartItem.price;
        state.items[existingCartItemIndex].quantity = newQuantity;
      },
      prepare(id, quantity) {
        return {
          payload: {
            id,
            newQuantity: quantity,
          },
        };
      },
    },
  },
  extraReducers: {
    // Fetch Cart Data
    [fetchCartData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCartData.fulfilled]: (state, { payload: cart }) => {
      state.status = "succeeded";
      state.error = null;
      state.id = cart._id;
      state.products = cart.products.map((cartProduct) => ({
        ...cartProduct.product,
        quantity: cartProduct.quantity,
      }));
      state.cartPrice = cart.cartPrice;
    },
    [fetchCartData.rejected]: (state, { error }) => {
      state.status = "error";
      console.log(error);
      state.error = error.message;
    },
    // Save Cart Item
    [saveCartItem.pending]: (state) => {
      state.status = "loading";
    },
    [saveCartItem.fulfilled]: (state, { payload: cart }) => {
      state.status = "succeeded";
      state.error = null;
      state.id = cart._id;
      state.products = cart.products.map((cartProduct) => ({
        ...cartProduct.product,
        quantity: cartProduct.quantity,
      }));
      state.cartPrice = cart.cartPrice;
    },
    [saveCartItem.rejected]: (state, { error }) => {
      state.status = "error";
      console.log(error);
      state.error = error.message;
    },
    // Clear Cart Data
    [clearCartData.pending]: (state) => {
      state.status = "loading";
    },
    [clearCartData.fulfilled]: (state, { payload: cart }) => {
      state.status = "succeeded";
      state.error = null;
      state.id = cart._id;
      state.products = cart.products.map((cartProduct) => ({
        ...cartProduct.product,
        quantity: cartProduct.quantity,
      }));
      state.cartPrice = cart.cartPrice;
    },
    [clearCartData.rejected]: (state, { error }) => {
      state.status = "error";
      console.log(error);
      state.error = error.message;
    },
    // Delete Cart Item
    [deleteCartItem.pending]: (state) => {
      state.status = "loading";
    },
    [deleteCartItem.fulfilled]: (state, { payload: cart }) => {
      state.status = "succeeded";
      state.error = null;
      state.id = cart._id;
      state.products = cart.products.map((cartProduct) => ({
        ...cartProduct.product,
        quantity: cartProduct.quantity,
      }));
      state.cartPrice = cart.cartPrice;
    },
    [deleteCartItem.rejected]: (state, { error }) => {
      state.status = "error";
      console.log(error);
      state.error = error.message;
    },
  },
});

export default cartSlice;
// export const { updateCartItem } = cartSlice.actions;
export const selectAllCartItems = (state) => state.cart.products;
export const selectCartItemById = (id) => (state) => {
  // console.log(id);
  // console.log(state.cart.products.find((product) => product._id === id));
  return state.cart.products.find((product) => product._id === id);
};
export const selectTotalPrice = (state) => state.cart.cartPrice;
export const selectStatus = (state) => state.cart.status;
export const selectError = (state) => state.cart.error;
export const cartReducer = cartSlice.reducer;
