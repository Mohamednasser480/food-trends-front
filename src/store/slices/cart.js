import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem(state, { payload: item }) {
    //   const existingItemIndex = state.items.findIndex(
    //     (existingItem) => existingItem.id === item.id
    //   );
    //   let existingItem = state.items[existingItemIndex];
    //   if (existingItem) {
    //     existingItem.quantity = item.quantity;
    //   } else {
    //     state.items.push(item);
    //   }
    //   state.total += (item.quantity - existingItem.quantity) * item.price;
    // },
    replaceItems(state, { payload: items }) {
      state.items = items;
    },
    updateCartItem(state, { payload: updatedItem }) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === updatedItem.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      if (updatedItem.quantity === 0) {
        state.items.splice(existingCartItemIndex, 1);
        state.totalPrice -= updatedItem.price * existingCartItem.quantity;
      } else if (!existingCartItem) {
        state.items.push(updatedItem);
        state.totalPrice += updatedItem.price * updatedItem.quantity;
      } else {
        state.total +=
          (updatedItem.quantity - existingCartItem.quantity) *
          updatedItem.price;
        state.items[existingCartItemIndex].quantity = updatedItem.quantity;
      }
    },
  },
});

export default cart;
export const cartActions = cart.actions;
export const cartReducer = cart.reducer;
