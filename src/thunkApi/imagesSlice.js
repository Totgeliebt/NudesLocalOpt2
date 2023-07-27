import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {handleServerError} from "../utils/helpers";
import axios from "axios";

export const getImageList = createAsyncThunk(
  "images/getImageList",
  async ({user, password}, { rejectWithValue, dispatch }) => {
    try {
      console.log(user, password)
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/images/list`,
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
      // handleServerError(response, dispatch)
      console.log('image list',response)
      return response.data;
    } catch (error) {
      // return rejectWithValue(error.message)
      console.log(error)
      return Promise.reject();
    }
  }
);


export const addNewImage = createAsyncThunk(
  "images/addNewImage",
  async ({ user, password, image }, { rejectWithValue, dispatch }) => {
    try {
      let bodyFormData = new FormData();
      bodyFormData.append('image', image);
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/images/new?`, bodyFormData,{
        withCredentials: true,
        headers: {
          // Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        auth: {
          username: user,
          password: password,
        },
      });
      // handleServerError(response, dispatch)
      console.log('added new image',response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return Promise.reject();

    }
  }
);

export const getImageBefore = createAsyncThunk(
  "images/getImageBefore",
  async ({ user, password, imageId }, { rejectWithValue, dispatch }) => {
    try {
      console.log(imageId)
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${imageId}&flag=0`,{
        withCredentials: true,
        responseType: 'blob',
        headers: {
          Accept: "application/json",
          // "Content-Type": "multipart/form-data",
        },
        auth: {
          username: user,
          password: password,
        },
      });
      handleServerError(response, dispatch)
      const imgUrl = URL.createObjectURL(response.data);
            console.log(imgUrl)
            return imgUrl
    } catch (error) {
      console.log(error)
      // return Promise.reject();

    }
  }
);
export const getImageAfter = createAsyncThunk(
  "images/getImageAfter",
  async ({ user, password, imageId }, { rejectWithValue, dispatch }) => {
    try {
console.log(imageId)
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/images/get?image_id=${imageId}&flag=1`,{
        withCredentials: true,
        responseType: 'blob',
        headers: {
          // Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        auth: {
          username: user,
          password: password,
        },
      });
      // handleServerError(response, dispatch)
      const imgUrl = URL.createObjectURL(response.data);
      console.log(imgUrl)
      return imgUrl
    } catch (error) {
      console.log(error)
      return Promise.reject();

    }
  }
);
export const checkImageState = createAsyncThunk(
  "images/checkImageState",
  async ({ imageId, user, password }, { rejectWithValue, dispatch }) => {
    try {
      console.log(user, password, imageId)
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/images/check?image=${imageId}`,
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
      handleServerError(response, dispatch)
       console.log('check image state',response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [
      {
        imageId: "",
        state: null,
      },
    ],
    before: '',
    after: '',
    status: null,
    error: null,
    popup: {
      isShow: false,
      type: "",
    },
    gallery: [],
  },
  reducers: {
    getAllImages(state, action) {
      console.log(action.payload)
      state.images.push(action.payload);
    },
    uploadImage(state, action) {
      console.log(action.payload)
      state.images.push(action.payload);
    },
    updateImage(state, action) {
      const { imageId, stateCard } = action.payload;
      console.log(action.payload)
      state.images.forEach((image) => {
        if (image.imageId === imageId) {
          image.state = stateCard;
        }
      });
    },
    addImage(state, action) {
      console.log(action.payload)
      const { imageId } = action.payload.data;
      state.images.push({
        imageId,
        state: 0,
      });
    },
    checkState(state, action) {
      console.log(action.payload)
      state.images.push(action.payload);
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
    [getImageList.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.images = action.payload;
    },
    [getImageList.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getImageList.rejected]: setError,
    [addNewImage.fulfilled]: (state, action) => {
      console.log(action.payload)
      const { imageId } = action.payload.data;
      state.images.push({
        imageId,
        state: 0,
      });
      state.status = "resolved";
    },
    [addNewImage.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addNewImage.rejected]: setError,
    [getImageBefore.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.before = action.payload
      state.status = "resolved";
    },
    [getImageBefore.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getImageBefore.rejected]: setError,
    [getImageAfter.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.after = action.payload
      state.status = "resolved";
    },
    [getImageAfter.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getImageAfter.rejected]: setError,
    [checkImageState.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [checkImageState.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [checkImageState.rejected]: (state, action) => {
      state.popup = {
        isShow: false,
        type: "error",
      };
      setError(state, action);
    },
  },
});

export const {
  getAllImages,
  uploadImage,
  checkState,
  showPopup,
  updateImage,
  addImage,
} = imagesSlice.actions;

export default imagesSlice.reducer;
