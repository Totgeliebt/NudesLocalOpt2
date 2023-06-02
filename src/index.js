import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./thunkApi/thunkStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./thunkApi/thunkStore";
import { GalleryProvider } from "./context";
import "./scripts/localization";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <BrowserRouter>
          <GalleryProvider>
            <App />
          </GalleryProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
