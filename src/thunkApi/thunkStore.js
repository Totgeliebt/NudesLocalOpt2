import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import imagesSlice from "./imagesSlice";
import depositSlice from "./depositSlice";
import authSlice from "./authSlice";

const reducers = combineReducers({
  user: userSlice,
  images: imagesSlice,
  deposit: depositSlice,
  auth: authSlice
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
