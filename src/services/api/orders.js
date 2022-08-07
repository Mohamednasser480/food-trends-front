import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const Order_API_URI = `${API_URI}/orders`;

//Get All Orders
const getAllOrders = async (userToken) => {
  const res = await axios.get(Order_API_URI, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

//Create New Order
const createOrder = async (userToken, data) => {
  await axios.post(`${Order_API_URI}`, data, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

//Delete an Order
const deleteOrder = async (userToken, id) => {
  await axios.delete(`${Order_API_URI}/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

export default {
  getAllOrders,
  createOrder,
  deleteOrder,
};
