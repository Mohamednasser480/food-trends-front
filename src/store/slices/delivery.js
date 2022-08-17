import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookie } from '../../services';
import delivery from '../../services/api/delivery';

const initialState = {
  count: 0,
  completedOrdersCount: 0,
  assignOrdersCount: 0,
  allOrders: [],
  completedOrders: [],
  assignedOrders: [],
  status: 'idle',
  error: '',
};

export const getAllOrders = createAsyncThunk('delivery/getAllOrders', async () => {
  const token = cookie.getCookie('token');
  return await delivery.getAllOrders(token);
});

export const getAssignedOrders = createAsyncThunk('delivery/getAssignedOrders', async () => {
  const token = cookie.getCookie('token');
  return await delivery.getAssignedOrders(token);
});
export const getCompletedOrders = createAsyncThunk('delivery/getCompletedOrders', async () => {
  const token = cookie.getCookie('token');
  return await delivery.getCompletedOrders(token);
});

export const assignOrders = createAsyncThunk('delivery/assignOrders', async (id) => {
  const token = cookie.getCookie('token');
  const data = await delivery.assignOrders(token, id);
  return { data, id };
});

export const deassignOrder = createAsyncThunk('delivery/deassignOrder', async (id) => {
  const token = cookie.getCookie('token');
  const data = await delivery.deassignOrder(token, id);
  return { data, id };
});

export const setOrderComplete = createAsyncThunk('delivery/setOrdersComplete', async (id) => {
  const token = cookie.getCookie('token');
  const data = await delivery.setOrderComplete(token, id);
  return { data, id };
});

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  extraReducers: {
    // getting all orders
    [getAllOrders.pending]: (state) => {
      state.status = 'Pending';
    },
    [getAllOrders.fulfilled]: (state, { payload }) => {
      state.count = payload.count;
      state.allOrders = [...payload.data];
      state.status = 'Fulfilled';
    },
    [getAllOrders.rejected]: (state) => {
      state.status = 'Rejected';
    },

    // getting all assigned orders
    [getAssignedOrders.pending]: (state) => {
      state.status = 'Pending';
    },
    [getAssignedOrders.fulfilled]: (state, { payload }) => {
      state.assignOrdersCount = payload.length;
      state.assignedOrders = [...payload];
      state.status = 'Fulfilled';
    },
    [getAssignedOrders.rejected]: (state) => {
      state.status = 'Rejected';
    },

    // getting all completed orders
    [getCompletedOrders.pending]: (state) => {
      state.status = 'Pending';
    },
    [getCompletedOrders.fulfilled]: (state, { payload }) => {
      state.completedOrdersCount = payload.length;
      state.completedOrders = [...payload];
      state.status = 'Fulfilled';
    },
    [getCompletedOrders.rejected]: (state) => {
      state.status = 'Rejected';
    },

    // assign orders function
    [assignOrders.pending]: (state) => {
      state.status = 'Pending';
    },
    [assignOrders.fulfilled]: (state, { payload }) => {
      state.status = 'Fulfilled';
      const ordersAfterAssign = state.allOrders.filter((order) => order._id !== payload.id);
      state.allOrders = ordersAfterAssign;
    },
    [assignOrders.rejected]: (state) => {
      state.status = 'Rejected';
    },

    // set orders complete function
    [setOrderComplete.pending]: (state) => {
      state.status = 'Pending';
    },
    [setOrderComplete.fulfilled]: (state, { payload }) => {
      state.status = 'Fulfilled';
      const ordersAfterComplete = state.assignedOrders.filter((order) => order._id !== payload.id);
      state.assignedOrders = ordersAfterComplete;
    },
    [setOrderComplete.rejected]: (state) => {
      state.status = 'Rejected';
    },

    // Deassign orders function
    [deassignOrder.pending]: (state) => {
      state.status = 'Pending';
    },
    [deassignOrder.fulfilled]: (state, { payload }) => {
      state.status = 'Fulfilled';
      const ordersAfterComplete = state.assignedOrders.filter((order) => order._id !== payload.id);
      state.assignedOrders = ordersAfterComplete;
    },
    [deassignOrder.rejected]: (state) => {
      state.status = 'Rejected';
    },
  },
});

export const allOrdersSelector = (state) => state.delivery.allOrders;
export const allOrdersCountSelector = (state) => state.delivery.count;
export const statusSelector = (state) => state.delivery.status;

export const assignedOrdersCountSelector = (state) => state.delivery.assignOrdersCount;
export const assignedOrdersSelector = (state) => state.delivery.assignedOrders;

export const completedOrdersCountSelector = (state) => state.delivery.completedOrdersCount;
export const completedOrdersSelector = (state) => state.delivery.completedOrders;

export default deliverySlice.reducer;
