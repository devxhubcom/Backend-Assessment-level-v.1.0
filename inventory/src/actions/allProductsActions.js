import axios from "axios";
import {
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from "../constants/allProductsConstants";

export const getAllProductsAction = (search) => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCT_REQUEST });
  axios
    .get(`/allproducts/?search=${search}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_ALL_PRODUCT_FAILED, payload: error });
    });
};

export const addProductsAction = (formData) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  axios
    .post(`/allproducts/`, formData)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: ADD_PRODUCT_FAILED, payload: error });
    });
};

export const getProductsAction = (productId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`/allproducts/${productId}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_PRODUCT_FAILED, payload: error });
    });
};

export const updateProductsAction =
  (productId, formData) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    axios
      .put(`/allproducts/${productId}/`, formData)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: UPDATE_PRODUCT_FAILED, payload: error });
      });
  };

export const deleteProductsAction = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  axios
    .delete(`/allproducts/${productId}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DELETE_PRODUCT_FAILED, payload: error });
    });
};
