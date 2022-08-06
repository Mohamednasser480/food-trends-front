import axios from "axios";
const DUMMY_PRODUCTS = {
  id: 213124145452343,
  products: [
    {
      id: 0,
      productId: 20,
      name: "product",
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.8-90x90.jpg",
      price: 50,
      quantity: 1,
      stock: 300,
    },
    {
      id: 1,
      productId: 21,
      name: "product",
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.8-90x90.jpg",
      price: 50,
      quantity: 1,
      stock: 300,
    },
    {
      id: 2,
      productId: 55,
      name: "product",
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.8-90x90.jpg",
      price: 50,
      quantity: 1,
      stock: 300,
    },
  ],
  cartPrice: 150,
};
const API_URI = process.env.REACT_APP_API_URI;
const CART_API_URI = `${API_URI}/cart`;

export const getCartData = async (userToken) => {
  if (!userToken) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const cart = localStorage.getItem("cart") || DUMMY_PRODUCTS;
        resolve(cart);
      }, 1000);
    });
  }

  const res = await axios.get(CART_API_URI, {
    headers: { Authorization: "Bearer " + userToken },
  });
  return res.data;
};

export const postCartData = async (cart) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
      resolve(cart);
    }, 1000);
  });
};

export default { getCartData, postCartData };
