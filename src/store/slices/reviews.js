import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reviewService } from "../../services/api";
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
    return await reviewService.fetchReviewsById(productId);
  }
);
// Add Review
export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (args, thunkAPI) => {
    const token=thunkAPI.getState().auth.token;
    await reviewService.addReview(args,token);
    return thunkAPI.dispatch(fetchReviews(args.product));
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
      state.error = "Sorry, Can't fetch reviews right now!";
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
      state.error = "Sorry, You should buy this product before adding a review!";
      state.reviews = [];
    },
  },
});

export const reviewsSelector = (state) => state.reviews;

export default reviews.reducer;
