import { createSlice } from "@reduxjs/toolkit";
import { cartService } from "../../services/api";

const initialState = {
  items: [
    // {
    //   id: 0,
    //   productId: 20,
    //   name: "product",
    //   image:
    //     "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.8-90x90.jpg",
    //   price: 50,
    //   quantity: 1,
    //   stock: 300,
    // },
    // {
    //   id: 1,
    //   productId: 21,
    //   name: "product",
    //   image:
    //     "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.8-90x90.jpg",
    //   price: 50,
    //   quantity: 1,
    //   stock: 300,
    // },
    // {
    //   id: 2,
    //   productId: 55,
    //   name: "product",
    //   image:
    //     "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.8-90x90.jpg",
    //   price: 50,
    //   quantity: 1,
    //   stock: 300,
    // },
  ],
  total: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
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

const fetchCartItems = () => (dispatch) => {
  const items = cartService.getItems();
  dispatch(cartActions.replaceItems(items));
};

const saveCartItems = (items) => () => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

export default cart;
export const cartActions = { ...cart.actions, fetchCartItems, saveCartItems };
export const cartReducer = cart.reducer;
