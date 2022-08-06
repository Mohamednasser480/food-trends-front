import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../../services/api";

const initialState = {
  id: "",
  products: [],
  cartPrice: 0,
  status: "idle", // "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartItems(state, { payload: items }) {
      state.items = [...items];
    },
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
    deleteCartItem(state, { payload: id }) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );
      if (existingCartItemIndex === -1) throw Error("Item doesn't exist");
      state.items.splice(existingCartItemIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, { payload: cart }) => {
        state.status = "succeeded";
        state.id = cart._id;
        state.products = [...cart.products];
        state.cartPrice = cart.cartPrice;
      })
      .addCase(fetchCartItems.rejected, (state, { error }) => {
        state.status = "failed";
        console.log(error);
        state.error = error.message;
      });
  },
});

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    return await cartService.getCartData();
  }
);

export const saveCartItems = createAsyncThunk(
  "cart/saveCartItems",
  async (cart) => {
    console.log(cart);
    return await cartService.postCartData(cart);
  }
);

export default cartSlice;
export const { addCartItem, updateCartItem, updateCartItems, deleteCartItem } =
  cartSlice.actions;
export const selectAllCartItems = (state) => state.cart.products;
export const selectTotalPrice = (state) => state.cart.cartPrice;
export const selectStatus = (state) => state.cart.status;
export const selectError = (state) => state.cart.error;
// export const cartActions = { ...cart.actions, fetchCartItems, saveCartItems };
export const cartReducer = cartSlice.reducer;
