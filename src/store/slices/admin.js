import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../../services/api/admin";

const initialState = {
  users: [],
  count: 0,
  isLoading: false,
  error: false,
  currentPage: 1,
  filterObject: { name: "", verified: "" },
};

export const getUsers = createAsyncThunk("users/getUsers", async (filters) => {
  try {
    const data = await adminService.getUsers(filters);
    // console.log(data)
    return { data, filters };
  } catch (error) {
    throw error;
  }
});
export const paginateUsers = createAsyncThunk(
  "users/paginateUsers",
  async (args, thunkAPI) => {
    try {
      const filters = thunkAPI.getState().users.filterObject;
      const data = await adminService.paginateUsers(args, filters);
      // console.log(data)
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const AdminSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
      state.users = [];
      state.error = false;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.data;
      state.count = action.payload.data.count;
      state.error = false;
      state.filterObject = action.payload.filters;
      state.currentPage = 1;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error;
    },
    // PaginateUsers
    [paginateUsers.pending]: (state) => {
      state.isLoading = true;
      state.users = [];
      state.error = false;
    },
    [paginateUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.data;
      state.currentPage = action.payload.currentPage;
      state.error = false;
    },
    [paginateUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error;
    },
  },
});

export default AdminSlice.reducer;
export const adminUsersSelector = (state) => state.users;