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

export const getHistoryListReducer = (state = { historyList: [] }, action) => {
  switch (action.type) {
    case GET_HISTORY_LIST_REQUEST:
      return { isLoading: true };

    case GET_HISTORY_LIST_SUCCESS:
      return { isLoading: false, historyList: action.payload };

    case GET_HISTORY_LIST_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const addHistoryReducer = (state = { history: {} }, action) => {
  switch (action.type) {
    case ADD_HISTORY_REQUEST:
      return { isLoading: true };

    case ADD_HISTORY_SUCCESS:
      return { isLoading: false, history: action.payload };

    case ADD_HISTORY_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_HISTORY_REQUEST:
      return { isLoading: true };

    case DELETE_HISTORY_SUCCESS:
      return { isLoading: false, success: true };

    case DELETE_HISTORY_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
