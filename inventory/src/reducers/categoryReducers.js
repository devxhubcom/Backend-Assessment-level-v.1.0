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

export const getAllCategoryReducer = (state = { allCategory: [] }, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_REQUEST:
      return { isLoading: true };

    case GET_ALL_CATEGORY_SUCCESS:
      return { isLoading: false, allCategory: action.payload };

    case GET_ALL_CATEGORY_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const getAllCategoryProductReducer = (
  state = { allCategoryProduct: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_PRODUCT_REQUEST:
      return { isLoading: true };

    case GET_ALL_CATEGORY_PRODUCT_SUCCESS:
      return { isLoading: false, allCategoryProduct: action.payload };

    case GET_ALL_CATEGORY_PRODUCT_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const addCategoryReducer = (state = { addedCategory: {} }, action) => {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
      return { isLoading: true };

    case ADD_CATEGORY_SUCCESS:
      return { isLoading: false, addedCategory: action.payload };

    case ADD_CATEGORY_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateCategoryReducer = (
  state = { updatedCategory: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_CATEGORY_REQUEST:
      return { isLoading: true };

    case UPDATE_CATEGORY_SUCCESS:
      return { isLoading: false, updatedCategory: action.payload };

    case UPDATE_CATEGORY_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return { isLoading: true };

    case DELETE_CATEGORY_SUCCESS:
      return { isLoading: false, success: true };

    case DELETE_CATEGORY_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
