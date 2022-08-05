import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../../../services/api/vendorService";

const initialState = {
  products: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

//Get ALL Products of the Vendor
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await products.getProducts();
  }
);

//Add Product to database of the vendor
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data) => {
    return await products.saveProduct(data);
  }
);

//Delete a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    return await products.deleteProduct(id);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = [...payload];
    });
  },
});

export const getAllProducts = (state) => state.products.products;
export default productsSlice.reducer;
