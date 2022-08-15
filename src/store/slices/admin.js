import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../../services/api/admin";

const initialState = {
  users: [],
  count: 0,
  isLoading: false,
  error: false,
  currentPage: 1,
  filterObject: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const data = await adminService.getUsers();
    // console.log(data)
    return data;
  } catch (error) {
    throw error;
  }
});

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
      state.users = action.payload.data;
      state.count=action.payload.count
      state.error = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error;
    },
  },
});

export default AdminSlice.reducer;
export const adminUsersSelector=(state)=>state.users