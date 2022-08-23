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

export const getCategoryListReducer = (
  state = { categoryList: [] },
  action
) => {
  switch (action.type) {
    case GET_CATEGORY_LIST_REQUEST:
      return { isLoading: true };

    case GET_CATEGORY_LIST_SUCCESS:
      return { isLoading: false, categoryList: action.payload };

    case GET_CATEGORY_LIST_FAILED:
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
      return { isLoading: true, updatedCategory: action.payload };

    case UPDATE_CATEGORY_FAILED:
      return { isLoading: true, error: action.payload };

    default:
      return state;
  }
};

export const getCategoryDetailsReducer = (
  state = { categoryDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_CATEGORY_DETAILS_REQUEST:
      return { isLoading: true };

    case GET_CATEGORY_DETAILS_SUCCESS:
      return { isLoading: false, categoryDetails: action.payload };

    case GET_CATEGORY_DETAILS_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const getCategorySummaryListReducer = (
  state = { categorySummaryList: [] },
  action
) => {
  switch (action.type) {
    case GET_CATEGORY_SUMMARY_REQUEST:
      return { isLoading: true };

    case GET_CATEGORY_SUMMARY_SUCCESS:
      return { isLoading: false, categorySummaryList: action.payload };

    case GET_CATEGORY_SUMMARY_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
