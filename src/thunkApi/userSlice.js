import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {handleServerError} from "../utils/helpers";

export const auth = createAsyncThunk(
  "user/auth",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/user/auth`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
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
export const registration = createAsyncThunk(
  "user/registration",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/registration`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
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

export const balance = createAsyncThunk(
  "user/balance",
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/user/balance`,
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
  console.log(action.payload)
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: null,
    error: null,
    popup: {
      isShow: false,
      type: "",
    },
  },
  reducers: {
    register(state, action) {
      state.user.push(action.payload);
    },
    login(state, action) {
      state.user.push(action.payload);
    },
    logout(state) {
      state.user = {};
      localStorage.setItem("persist:root", {});
    },
    checkBalance(state, action) {
      state.user.wallet = action.payload.wallet;
    },
    showPopup(state, action) {
      const { isShow, type } = action.payload;
      state.popup = {
        isShow,
        type,
      };
    },
  },
  extraReducers: {
    [registration.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [registration.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
      state.popup = {
        isShow: false,
        type: "reg",
      };
    },
    [auth.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
      state.popup = {
        isShow: false,
        type: "login",
      };
    },
    [registration.rejected]: (state, action) => {
      state.popup = {
        isShow: true,
        type: "reg",
      };
      setError(state, action);
    },
    [auth.rejected]: (state, action) => {
      state.popup = {
        isShow: true,
        type: "login",
      };
      setError(state, action);
    },
    [balance.fulfilled]: (state, action) => {
      state.user.wallet = action.payload.wallet;
    },
    [balance.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [balance.rejected]: setError,
  },
});

export const { login, register, logout, showPopup, checkBalance } =
  userSlice.actions;

export default userSlice.reducer;
