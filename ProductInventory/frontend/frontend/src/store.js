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
  getProductSummaryListReducer,
} from "./reducers/productReducers";
import {
  getCategoryListReducer,
  addCategoryReducer,
  getCategoryDetailsReducer,
  deleteCategoryReducer,
  updateCategoryReducer,
  getCategorySummaryListReducer,
} from "./reducers/categoryReducers";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    getCategoryListReducer: getCategoryListReducer,
    addCategoryReducer: addCategoryReducer,
    deleteCategoryReducer: deleteCategoryReducer,
    updateCategoryReducer: updateCategoryReducer,
    getCategoryDetailsReducer: getCategoryDetailsReducer,
    getCategorySummaryListReducer: getCategorySummaryListReducer,
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
    getProductSummaryListReducer: getProductSummaryListReducer,
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

export default store;
