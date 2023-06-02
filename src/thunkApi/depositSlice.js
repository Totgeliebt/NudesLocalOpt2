import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {handleServerError} from "../utils/helpers";


export const getPaymentLink = createAsyncThunk(
  "deposit/getPaymentLink",
  async ({ token, coinValue }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/payments/create?payment_type=1&payment_amount=${coinValue}`,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      handleServerError(response, dispatch)
      const data = await response.json();
      if (data.link) window.open(data.link, "_blank");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getPaymentTypes = createAsyncThunk(
  "deposit/getPaymentTypes",
  async (token, { rejectWithValue,dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/payments/types`,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      handleServerError(response, dispatch)
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPaymentAmounts = createAsyncThunk(
  "deposit/getPaymentAmounts",
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/payments/amounts`,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      handleServerError(response, dispatch)
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const depositSlice = createSlice({
  name: "deposit",
  initialState: {
    deposit: {},
    status: null,
    error: null,
    amounts: [],
    types: [],
  },
  reducers: {
    getLink(state, action) {
      state.deposit.push(action.payload);
    },
    getAmount(state, action) {
      state.deposit.amounts.push(action.payload);
    },
    getTypes(state, action) {
      state.deposit.types.push(action.payload);
    },
  },
  extraReducers: {
    [getPaymentLink.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getPaymentLink.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.deposit = action.payload;
    },
    [getPaymentLink.rejected]: setError,

    [getPaymentAmounts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.amounts = action.payload;
    },
    [getPaymentAmounts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPaymentAmounts.rejected]: setError,

    [getPaymentTypes.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.types = action.payload;
    },
    [getPaymentTypes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPaymentTypes.rejected]: setError,
  },
});

export const { getLink, getAmount, getTypes } = depositSlice.actions;

export default depositSlice.reducer;
