import axios from "axios";

const VENDOR_API_URI = `${process.env.REACT_APP_API_URI}/vendor`;

//Get ALL Products of the Vendor
const getProducts = async (vendorId) => {
  const res = await axios.get(`${VENDOR_API_URI}/${vendorId}`);
  return res.data;
};

//Add a Product to database of the vendor
const saveProduct = async (userToken, data) => {
  const res = await axios.post(VENDOR_API_URI, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

//Update a product by ID and Data
const updateProduct = async (userToken, id, data) => {
  const res = await axios.patch(`${VENDOR_API_URI}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

//Delete a product
const deleteProduct = async (userToken, id) => {
  const res = await axios.delete(`${VENDOR_API_URI}/${id}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

export default {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
