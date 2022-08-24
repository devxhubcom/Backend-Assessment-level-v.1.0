import axios from "axios";
import {
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  GET_CATEGORY_DETAILS_REQUEST,
  GET_CATEGORY_DETAILS_SUCCESS,
  GET_CATEGORY_DETAILS_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
  GET_CATEGORY_SUMMARY_REQUEST,
  GET_CATEGORY_SUMMARY_SUCCESS,
  GET_CATEGORY_SUMMARY_FAILED,
} from "../constants/categoryConstants";

export const getCategoryListAction = (search) => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_LIST_REQUEST });
  axios
    .get(`/store/categories/?search=${search}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: GET_CATEGORY_LIST_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_CATEGORY_LIST_FAILED, payload: error });
    });
};

export const addCategoryAction = (data) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  axios
    .post("/store/categories/", data)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: ADD_CATEGORY_FAILED, payload: error });
    });
};

export const updateCategoryAction = (categoryId, data) => async (dispatch) => {
  dispatch({ type: UPDATE_CATEGORY_REQUEST });
  axios
    .put(`/store/categories/${categoryId}/`, data)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_CATEGORY_FAILED, payload: error });
    });
};

export const deleteCategoryAction = (categoryId) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });
  axios
    .delete(`/store/categories/${categoryId}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: DELETE_CATEGORY_FAILED, payload: error });
    });
};

export const getCategoryDetailsAction = (categoryId) => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_DETAILS_REQUEST });

  axios
    .get(`/store/categories/${categoryId}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_CATEGORY_DETAILS_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_CATEGORY_DETAILS_FAILED, payload: error });
    });
};

export const getCategorySummaryListAction = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORY_SUMMARY_REQUEST });
  axios
    .get("/store/categories-summary/")
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: GET_CATEGORY_SUMMARY_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_CATEGORY_SUMMARY_FAILED, payload: error });
    });
};
