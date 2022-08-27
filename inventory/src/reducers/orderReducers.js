import {
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../constants/orderConstants";

export const addOrderReducer = (state = { addedOrder: {} }, action) => {
  switch (action.type) {
    case ADD_ORDER_REQUEST:
      return { isLoading: true };

    case ADD_ORDER_SUCCESS:
      return { isLoading: false, addedOrder: action.payload };

    case ADD_ORDER_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const getOrderReducer = (state = { orderList: [] }, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { isLoading: true };

    case GET_ORDER_SUCCESS:
      return { isLoading: false, orderList: action.payload };

    case GET_ORDER_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
