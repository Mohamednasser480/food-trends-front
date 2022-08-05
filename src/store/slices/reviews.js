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
    try {
      return await reviewService.fetchReviewsById(productId);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
// Add Review
export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (args, thunkAPI) => {
    try {
      return await reviewService.addReview(args);
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(fetchReviews(args.product));
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
      state.reviews = [];
    },
  },
});

export const reviewsSelector = (state) => state.reviews;

export default reviews.reducer;
