import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;
const Order_API_URI = `${API_URI}/orders`;

let url = `${window.location.origin}/Foodtrends/#/payment`;
//Do Payment
const doPayment = async (userToken,cartItems) => {
  const data={items:cartItems,url:url}
  // console.log(data)
  try {
    const res = await axios.post(
      Order_API_URI,
      data,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    
    return res.data.url;
    // return { userToken, orderItems };
  } catch (error) {
    // console.log(error.response.data);
    throw error.response.data;
  }
};

export default { doPayment };