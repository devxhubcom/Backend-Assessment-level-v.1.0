import axios from "axios";
import {
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../constants/orderConstants";

export const addOrderAction = (formData) => async (dispatch) => {
  dispatch({ type: ADD_ORDER_REQUEST });
  axios
    .post(`/api/orders/`, formData)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: ADD_ORDER_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: ADD_ORDER_FAILED, payload: error });
    });
};

export const getOrderAction = (search) => async (dispatch) => {
  dispatch({ type: GET_ORDER_REQUEST });
  axios
    .get(`/api/orders/?search=${search}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_ORDER_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_ORDER_FAILED, payload: error });
    });
};
