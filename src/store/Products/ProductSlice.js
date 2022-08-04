import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:3000/api/v1/products";

const initialState = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(USERS_URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmUxYmM2NGQ0NzRhYTUwOTJmNjM2YWMiLCJpYXQiOjE2NTk2MTEzNjUsImV4cCI6MTY1OTg3MDU2NX0.8oTloqS7kOky4Jy-9WpXvri-xwazWwTIXKdINOI2tc8",
      },
    });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(
        productName,
        summary,
        description,
        price,
        weight,
        discount,
        inStock
      ) {
        return {
          payload: {
            productName,
            summary,
            description,
            price,
            weight,
            discount,
            inStock,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const getAllProducts = (state) => state.products;
export default productsSlice.reducer;
