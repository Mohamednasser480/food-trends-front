import axios from 'axios';
const url = `${process.env.REACT_APP_API_URI}/delivery`;

const getAllOrders = async (token) => {
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
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
const setOrderComplete = async (token, id) => {
  let data = { id: id, status: 'completed' };
  const response = await axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const deassignOrder = async (token, id) => {
  let data = { id: id, status: 'pending' };
  const response = await axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default {
  getAllOrders,
  getAssignedOrders,
  getCompletedOrders,
  assignOrders,
  setOrderComplete,
  deassignOrder,
};
