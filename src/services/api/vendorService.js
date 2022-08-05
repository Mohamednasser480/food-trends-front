import axios from "axios";

const VENDOR_API_URI = `http://localhost:3000/api/v1/vendor`;
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVjNDgyNzY3MGViMTRlMDEyMmY0MzYiLCJpYXQiOjE2NTk2NTI4MTUsImV4cCI6MTY1OTkxMjAxNX0.h_Yau5-F7jJsl6J3jqjFlE1MbFnmvwABqygF_4Gr3ZI";

//Get ALL Products of the Vendor
const getProducts = async () => {
  const res = await axios.get(VENDOR_API_URI + "/62ec4827670eb14e0122f436");
  return res.data;
};

//Add a Product to database of the vendor
const saveProduct = async (data) => {
  await axios
    .post(VENDOR_API_URI, data, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((e) => console.log(e));
};

//Update a product by ID and Data
const updateProduct = async (id, data) => {
  await axios
    .patch(`${VENDOR_API_URI}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((e) => console.log(e));
};

//Delete a product
const deleteProduct = async (id) => {
  await axios
    .delete(`${VENDOR_API_URI}/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    .then((e) => console.log(e));
};

export default {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
