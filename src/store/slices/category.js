import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryService } from "../../services/api/";

const initialState = {
  categories: [],
  isLoading: false,
  error: false,
};
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    try {
      const data = await categoryService.fetchCategories();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.isLoading = true;
      state.error = "";
      state.categories = [];
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.categories = [];
    },
  },
});

export default categorySlice.reducer;

export const categoryStateSelector = (state) => state.category;
