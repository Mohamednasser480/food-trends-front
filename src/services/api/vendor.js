import axios from "axios";
import cookie from "../cookie";

const VENDOR_API_URI = `${process.env.REACT_APP_API_URI}/vendor`;
const USER_API_URI = `${process.env.REACT_APP_API_URI}/users`;

//Get ALL Products of the Vendor
const getProducts = async (vendorId) => {
  const res = await axios.get(`${VENDOR_API_URI}/${vendorId}`);
  return res.data;
};

const getOrders = async (userToken) => {
  const res = await axios.get(`${VENDOR_API_URI}/orders`, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${userToken}`,
    },
  });
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
      "Content-Type": "multipart/form-data",
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

// Update Profile Image
const updateProfileImage = async (userToken, formData) => {
  console.log(formData);

  await axios.patch(`${USER_API_URI}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${userToken}`,
    },
  });
};

const getOrdersFiltered = async (filterQuery) => {
  const ordersFilter = () => {
    if (!filterQuery.orderStatus || filterQuery.orderStatus == "all") return "";
    let ordersQuery;

    switch (filterQuery.orderStatus) {
      case "pending":
        ordersQuery = `pending&`;
        break;
      case "canceled":
        ordersQuery = `canceled&`;
        break;
      case "completed":
        ordersQuery = `completed&`;
        break;

      default:
        ordersQuery = "";
        break;
    }
    return `status=${ordersQuery}`;
  };

  const pricesFilter = () => {
    if (!filterQuery.prices || filterQuery.prices == "all") return "";
    return filterQuery.prices === "lowest"
      ? `sortBy=totalPrice`
      : filterQuery.prices === "highest"
      ? `sortBy=totalPrice:desc`
      : "";
  };

  const URL = `${VENDOR_API_URI}/orders?${ordersFilter()}&${pricesFilter()}`;

  const userToken = cookie.getCookie("token");
  const res = await axios.get(URL, {
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
  getOrders,
  getOrdersFiltered,
  updateProfileImage,
};
