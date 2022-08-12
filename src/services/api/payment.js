import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI;
const Order_API_URI = `${API_URI}/orders`;

const testOrder = [
  {
    id: {
      _id: "62f5032898ccb464e7034e5a",
      productName: "bell pepper",
      summary:
        "if green bells taste fresh and crisp as spring, reds are mellow and fruity as autumn. they are actually green peppers that have been left to ripen. roasted red bells have a rich, velvety flavor. we think they taste similar to ripe stewed tomatoes. more flavorful than young green bells, “sweet reds” are easier to digest.",
      description:
        "if green bells taste fresh and crisp as spring, reds are mellow and fruity as autumn. they are actually green peppers that have been left to ripen. roasted red bells have a rich, velvety flavor. we think they taste similar to ripe stewed tomatoes. more flavorful than young green bells, “sweet reds” are easier to digest. use small bell peppers for chopping and dicing. large bell peppers work best for stuffing, roasting and slicing. origin our food experts review our entire stock of fruit, vegetables, and seafood on a daily basis, taking notes and ranking each product. only the best of the best receive our “top-rated” designation. these ratings are updated each morning on our website to ensure that our recommendations will remain accurate for deliveries that day and on the following day.",
      images: [
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.9-540x540.jpg",
      ],
      category: "veggies",
      price: 15.99,
      inStock: 340,
      rate: 0,
      numberOfReviews: 0,
      vendor: "62f4fee6098142e058956327",
      createdAt: "2022-08-11T13:24:56.177Z",
      updatedAt: "2022-08-11T13:24:56.177Z",
      __v: 0,
    },
    quantity: 5,
    _id: "62f503f898ccb464e7034e68",
  },
];

//Do Payment
const doPayment = async (userToken, cartId) => {
  console.log(cartId);
  try {
    const res = await axios.post(
      Order_API_URI,
      {
        cartId,
      },
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
