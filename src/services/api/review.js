import axios from "axios";


const  fetchReviewsById=async (productId)=>{
    const response = await axios.get(
      `http://localhost:5000/api/v1/products/62ec2218345c4dcec1b0c240/reviews`
    );
    return response.data;
}


const addReview=async (reviewDetails,accesstoken)=>{
  const response = await axios.post(
    "http://localhost:5000/api/v1/reviews",
    reviewDetails,
    {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    }
  );
  return response.data
}


export default {fetchReviewsById,addReview}



