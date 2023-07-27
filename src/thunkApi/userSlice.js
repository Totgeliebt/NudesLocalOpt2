import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleServerError } from "../utils/helpers";
import axios from "axios";

export const userBalance = createAsyncThunk(
  "user/userBalance",
  async ({ user, password }, { rejectWithValue, dispatch }) => {
    try {
      // console.log(user, password);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/user/info`,
        {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          auth: {
            username: user,
            password: password,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);
const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
  console.log(action.payload);
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
    showPopup(state, action) {
      const { isShow, type } = action.payload;
      state.popup = {
        isShow,
        type,
      };
    },
  },
  extraReducers: {
    [userBalance.fulfilled]: (state, action) => {
      console.log("balance in slice", action.payload);
      state.user = action.payload;
    },
    [userBalance.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [userBalance.rejected]: setError,
  },
});

export const { showPopup } = userSlice.actions;

export default userSlice.reducer;
