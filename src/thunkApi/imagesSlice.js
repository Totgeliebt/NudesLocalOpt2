import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {handleServerError} from "../utils/helpers";

export const getImageList = createAsyncThunk(
  "images/getImageList",
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/images/list`,
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
export const addNewImage = createAsyncThunk(
  "images/addNewImage",
  async ({ token, image }, { rejectWithValue, dispatch }) => {
    try {
      console.log("Вызов addNewImage ====> ", { token, image });
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/images/new`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
          body: JSON.stringify(image),
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

export const checkImageState = createAsyncThunk(
  "images/checkImageState",
  async ({ imageId, token }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/v1/images/check?image_id=${imageId}`,
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

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [
      {
        imageId: "",
        state: null,
      },
    ],
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
      state.images.push(action.payload);
    },
    uploadImage(state, action) {
      state.images.push(action.payload);
    },
    updateImage(state, action) {
      const { imageId, stateCard } = action.payload;
      state.images.forEach((image) => {
        if (image.imageId === imageId) {
          image.state = stateCard;
        }
      });
    },
    addImage(state, action) {
      const { imageId } = action.payload;
      state.images.push({
        imageId,
        state: 0,
      });
    },
    checkState(state, action) {
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
      state.status = "resolved";
    },
    [addNewImage.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addNewImage.rejected]: setError,
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
