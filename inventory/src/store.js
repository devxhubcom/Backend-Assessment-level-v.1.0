import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  getAllProductReducer,
  deleteProductReducer,
  addProductReducer,
  getProductReducer,
  updateProductReducer,
} from "./reducers/allProductReducers";
import {
  getAllCategoryReducer,
  getAllCategoryProductReducer,
  addCategoryReducer,
  deleteCategoryReducer,
  updateCategoryReducer,
} from "./reducers/categoryReducers";
import { getOrderReducer, addOrderReducer } from "./reducers/orderReducers";
import {
  addFileReducer,
  getFileReducer,
  deleteFileReducer,
} from "./reducers/fileUploadReducers";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    getAllProductReducer: getAllProductReducer,
    addProductReducer: addProductReducer,
    getProductReducer: getProductReducer,
    updateProductReducer: updateProductReducer,
    deleteProductReducer: deleteProductReducer,
    getAllCategoryReducer: getAllCategoryReducer,
    getAllCategoryProductReducer: getAllCategoryProductReducer,
    addCategoryReducer: addCategoryReducer,
    updateCategoryReducer: updateCategoryReducer,
    deleteCategoryReducer: deleteCategoryReducer,
    getOrderReducer: getOrderReducer,
    addOrderReducer: addOrderReducer,
    addFileReducer: addFileReducer,
    getFileReducer: getFileReducer,
    deleteFileReducer: deleteFileReducer,
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

export default store;
