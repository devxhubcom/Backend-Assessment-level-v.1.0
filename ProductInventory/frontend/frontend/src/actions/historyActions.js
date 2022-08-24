import axios from "axios";
import {
  GET_HISTORY_LIST_REQUEST,
  GET_HISTORY_LIST_SUCCESS,
  GET_HISTORY_LIST_FAILED,
  DELETE_HISTORY_REQUEST,
  DELETE_HISTORY_SUCCESS,
  DELETE_HISTORY_FAILED,
  ADD_HISTORY_REQUEST,
  ADD_HISTORY_SUCCESS,
  ADD_HISTORY_FAILED,
} from "../constants/historyConstants";

export const getHistoryListAction = (search) => async (dispatch) => {
  dispatch({ type: GET_HISTORY_LIST_REQUEST });
  axios
    .get(`/store/histories/?search=${search}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: GET_HISTORY_LIST_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_HISTORY_LIST_FAILED, payload: error });
    });
};

export const addHistoryAction =
  (categoryId, productId, quantity, historyType) => async (dispatch) => {
    dispatch({ type: ADD_HISTORY_REQUEST });
    axios
      .post(
        `/store/categories/${categoryId}/products/${productId}/histories/`,
        {
          quantity: quantity,
          history_type: historyType,
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: ADD_HISTORY_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ADD_HISTORY_FAILED, payload: error });
      });
  };

export const deleteHistoryAction = (historyId) => async (dispatch) => {
  dispatch({ type: DELETE_HISTORY_REQUEST });
  axios
    .delete(`/store/histories/${historyId}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: DELETE_HISTORY_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: DELETE_HISTORY_FAILED, payload: error });
    });
};
