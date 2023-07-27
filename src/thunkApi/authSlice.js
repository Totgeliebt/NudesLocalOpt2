import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {handleServerError} from "../utils/helpers";

export const basicAuth = createAsyncThunk(
  "auth/basicAuth",
  async ({ user, password }, { rejectWithValue, dispatch }) => {
    try {
      console.log(user, password)
      await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/user/auth`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        auth: {
          username: user,
          password: password,
        },
      });
      dispatch(saveUser({user, password}))
    } catch (error) {
      console.log(error)
      return Promise.reject();
    }
  }
);
export const registrationUser = createAsyncThunk(
  "auth/registrationUser",
  async ({userData}, { rejectWithValue, dispatch }) => {
    try {
      console.log(userData);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/registration`, userData,
        {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      handleServerError(response, dispatch);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {},
    status: null,
    error: null,
  },
  reducers: {
    saveUser: (state, action) => {
      console.log(action.payload)
      // state.isLoggedIn = true;
      state.user = action.payload;
      console.log( state.isLoggedIn)
    },
    logoutUser(state) {
      state.auth = {};
      state.isLoggedIn = false
      localStorage.setItem("persist:root", {});
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(basicAuth.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoggedIn = true;
        state.status = "fulfilled";
        // state.user = action.payload
      })
      .addCase(basicAuth.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        console.log(action.payload)
        // state.isLoggedIn = true;
        state.status = "resolved";
        // state.user = action.payload;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      });
  },
});
export const { saveUser,logoutUser } = authSlice.actions;
export default authSlice.reducer;
