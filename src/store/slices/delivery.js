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
  return await delivery.assignOrders(token, id);
});

export const deassignOrder = createAsyncThunk('delivery/deassignOrder', async (id) => {
  const token = cookie.getCookie('token');
  return await delivery.deassignOrder(token, id);
});

export const setOrderComplete = createAsyncThunk('delivery/setOrdersComplete', async (id) => {
  const token = cookie.getCookie('token');
  return await delivery.setOrderComplete(token, id);
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
      state.assignOrdersCount++;
      state.assignedOrders.push(payload);
      state.status = 'Fulfilled';
    },
    [assignOrders.rejected]: (state) => {
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
