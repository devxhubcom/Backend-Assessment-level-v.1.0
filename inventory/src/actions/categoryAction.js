import axios from "axios";
import {
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
  GET_ALL_CATEGORY_PRODUCT_REQUEST,
  GET_ALL_CATEGORY_PRODUCT_SUCCESS,
  GET_ALL_CATEGORY_PRODUCT_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
} from "../constants/categoryConstants";

export const getAllCategoryAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CATEGORY_REQUEST });
  axios
    .get("/api/categories/")
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_ALL_CATEGORY_FAILED, payload: error });
    });
};

export const getAllCategoryProductAction = (categoryId) => async (dispatch) => {
  dispatch({ type: GET_ALL_CATEGORY_PRODUCT_REQUEST });
  console.log(categoryId);
  axios
    .get(`/api/categories/${categoryId}/products/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_ALL_CATEGORY_PRODUCT_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_ALL_CATEGORY_PRODUCT_FAILED, payload: error });
    });
};

export const addCategoryAction = (formData) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  axios
    .post(`/api/categories/`, formData)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: ADD_CATEGORY_FAILED, payload: error });
    });
};

export const updateCategoryAction = (categoryId, title) => async (dispatch) => {
  dispatch({ type: UPDATE_CATEGORY_REQUEST });
  axios
    .put(`/api/categories/${categoryId}/`, {
      id: categoryId,
      category_title: title,
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: UPDATE_CATEGORY_FAILED, payload: error });
    });
};

export const deleteCategoryAction = (categoryId) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });
  axios
    .delete(`/api/categories/${categoryId}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DELETE_CATEGORY_FAILED, payload: error });
    });
};
