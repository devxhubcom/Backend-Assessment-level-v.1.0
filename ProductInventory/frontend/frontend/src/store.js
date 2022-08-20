import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  getProductListReducer,
  addProductReducer,
  deleteProductReducer,
  getProductDetailsReducer,
  getProductImagesReducer,
  getProductFilesReducer,
  deleteProductImageReducer,
  deleteProductFileReducer,
  addProductImageReducer,
  addProductFileReducer,
  updateProductPATCHReducer,
  updateProductPUTReducer,
} from "./reducers/productReducers";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    getProductListReducer: getProductListReducer,
    addProductReducer: addProductReducer,
    deleteProductReducer: deleteProductReducer,
    getProductDetailsReducer: getProductDetailsReducer,
    getProductImagesReducer: getProductImagesReducer,
    getProductFilesReducer: getProductFilesReducer,
    deleteProductImageReducer: deleteProductImageReducer,
    deleteProductFileReducer: deleteProductFileReducer,
    addProductImageReducer: addProductImageReducer,
    addProductFileReducer: addProductFileReducer,
    updateProductPATCHReducer: updateProductPATCHReducer,
    updateProductPUTReducer: updateProductPUTReducer,
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

export default store;
