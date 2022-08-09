import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;
const CART_API_URI = `${API_URI}/cart`;

const getCartData = async (userToken) => {
  try {
    const res = await axios.get(CART_API_URI, {
      headers: { Authorization: "Bearer " + userToken },
    });
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

const updateCartData = async (userToken, cart) => {
  const res = await axios({
    method: "PUT",
    url: CART_API_URI,
    data: { ...cart },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

const postCartItem = async (userToken, product, quantity) => {
  const res = await axios({
    method: "POST",
    url: CART_API_URI,
    data: {
      product,
      quantity,
    },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

const updateCartItem = async (userToken, id, quantity) => {
  const res = await axios({
    method: "PATCH",
    url: CART_API_URI,
    data: {
      id,
      quantity,
    },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

const deleteCartItem = async (userToken, id) => {
  try {
    const res = await axios({
      method: "delete",
      url: CART_API_URI,
      data: {
        id,
      },
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

export default {
  getCartData,
  updateCartData,
  postCartItem,
  updateCartItem,
  deleteCartItem,
};
