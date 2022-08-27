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

export const getAllProductReducer = (state = { allProducts: [] }, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return { isLoading: true };

    case GET_ALL_PRODUCT_SUCCESS:
      return { isLoading: false, allProducts: action.payload };

    case GET_ALL_PRODUCT_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const addProductReducer = (state = { addedProduct: {} }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { isLoading: true };

    case ADD_PRODUCT_SUCCESS:
      return { isLoading: false, addedProduct: action.payload };

    case ADD_PRODUCT_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const getProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { isLoading: true };

    case GET_PRODUCT_SUCCESS:
      return { isLoading: false, product: action.payload };

    case GET_PRODUCT_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateProductReducer = (
  state = { updatedProduct: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return { isLoading: true };

    case UPDATE_PRODUCT_SUCCESS:
      return { isLoading: false, updatedProduct: action.payload };

    case UPDATE_PRODUCT_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { isLoading: true };

    case DELETE_PRODUCT_SUCCESS:
      return { isLoading: false, success: true };

    case DELETE_PRODUCT_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
