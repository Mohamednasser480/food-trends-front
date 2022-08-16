import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../../services/api/admin";

const initialState = {
  users: [],
  count: 0,
  isLoading: false,
  error: false,
  currentPage: 1,
  filterObject: { name: "", verified: "", userType: "" },
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

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    try {
      // console.log(userId)
      const data = await adminService.deleteUser(userId);
      return userId;
    } catch (error) {
      throw error;
    }
  }
);

export const approveUser = createAsyncThunk(
  "users/approveUser",
  async (userId, thunkAPI) => {
    try {
      // console.log(userId)
      const data = await adminService.approveUser(userId);
      return userId;
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
    // Delete Users
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
      // state.users = [];
      state.error = false;
    },
    [deleteUser.fulfilled]: (state, action) => {
      // Make new Array of Users
      const usersAfterDelete = state.users.map((user) => {
        if (user._id == action.payload) {
          return {
            ...user,
            email: `${user.email}.${user._id}.deleted`,
            available: false,
          };
        } else {
          return { ...user };
        }
      });
      state.isLoading = false;
      // state.users = state.users.filter((el)=>el._id!==action.payload);
      state.users = usersAfterDelete;
      // state.currentPage = action.payload.currentPage;
      state.error = false;
    },
    [deleteUser.rejected]: (state, action) => {
      state.isLoading = false;
      // state.users = [];
      state.error = action.error;
    },

    // Approve Users
    [approveUser.pending]: (state) => {
      state.isLoading = true;
      // state.users = [];
      state.error = false;
    },
    [approveUser.fulfilled]: (state, action) => {
      // Make new Array of Users
      const usersAfterApprove = state.users.map((user) => {
        if (user._id == action.payload) {
          return {
            ...user,
            verified: "true",
          };
        } else {
          return { ...user };
        }
      });
      state.isLoading = false;
      // state.users = state.users.filter((el)=>el._id!==action.payload);
      state.users = usersAfterApprove;
      // state.currentPage = action.payload.currentPage;
      state.error = false;
    },
    [approveUser.rejected]: (state, action) => {
      state.isLoading = false;
      // state.users = [];
      state.error = action.error;
    },
  },
});

export default AdminSlice.reducer;
export const adminUsersSelector = (state) => state.users;
