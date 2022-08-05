import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initialize State
const initialState = {
  reviews: [],
  isLoading: false,
  error: false,
};
// Fetch Reviews
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/products/62ec2218345c4dcec1b0c240/reviews`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// Add Review
export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (args, thunkAPI) => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVjMjBiMmQyMTY5NWQwYzc2MjdhZDgiLCJpYXQiOjE2NTk2NDIwMzQsImV4cCI6MTY1OTkwMTIzNH0.2F5vmwPMnZQDmOMedQJPCS22XrE5LjqjLCXcgNWNOW4"; 
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/reviews",
        args,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // console.log(args)
      thunkAPI.dispatch(fetchReviews())
      return response.data;
    } catch (error) {
      console.log(error)
      thunkAPI.rejectWithValue(error);
    }
  }
);

const reviews = createSlice({
  name: "reviews",
  initialState,
  extraReducers: {
    // Fetch Reviews Reducers
    [fetchReviews.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
      // console.log(action.payload)
    },
    [fetchReviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    // Add Review Reducers
    [addReview.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action.payload)
      // state.reviews.push({...action.payload,});
      
    },
    [addReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.reviews=[];
    },
  },
});

export const reviewsSelector = (state) => state.reviews;

export default reviews.reducer;
