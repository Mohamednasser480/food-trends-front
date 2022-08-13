import axios from 'axios';
const url = `${process.env.REACT_APP_API_URI}/delivery`;

const getAllOrders = async (token) => {
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const getAssignedOrders = async (token) => {
  const res = await axios.get(url + '/me?status=assigned', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const getCompletedOrders = async (token) => {
  const res = await axios.get(url + '/me?status=completed', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

const assignOrders = async (token, id) => {
  let data = { id: id };
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default { getAllOrders, getAssignedOrders, getCompletedOrders, assignOrders };
