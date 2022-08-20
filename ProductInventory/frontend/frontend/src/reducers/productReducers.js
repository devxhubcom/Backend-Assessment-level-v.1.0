import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILED,
  GET_PRODUCT_IMAGES_REQUEST,
  GET_PRODUCT_IMAGES_SUCCESS,
  GET_PRODUCT_IMAGES_FAILED,
  GET_PRODUCT_FILES_REQUEST,
  GET_PRODUCT_FILES_SUCCESS,
  GET_PRODUCT_FILES_FAILED,
  DELETE_PRODUCT_IMAGE_REQUEST,
  DELETE_PRODUCT_IMAGE_SUCCESS,
  DELETE_PRODUCT_IMAGE_FAILED,
  DELETE_PRODUCT_FILE_REQUEST,
  DELETE_PRODUCT_FILE_SUCCESS,
  DELETE_PRODUCT_FILE_FAILED,
  ADD_PRODUCT_IMAGE_REQUEST,
  ADD_PRODUCT_IMAGE_SUCCESS,
  ADD_PRODUCT_IMAGE_FAILED,
  ADD_PRODUCT_FILE_REQUEST,
  ADD_PRODUCT_FILE_SUCCESS,
  ADD_PRODUCT_FILE_FAILED,
  UPDATE_PRODUCT_PATCH_REQUEST,
  UPDATE_PRODUCT_PATCH_SUCCESS,
  UPDATE_PRODUCT_PATCH_FAILED,
  UPDATE_PRODUCT_PUT_REQUEST,
  UPDATE_PRODUCT_PUT_SUCCESS,
  UPDATE_PRODUCT_PUT_FAILED,
} from "../constants/productConstants";

export const getProductListReducer = (state = { productList: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_REQUEST:
      return { isLoading: true };

    case GET_PRODUCT_LIST_SUCCESS:
      return { isLoading: false, productList: action.payload };

    case GET_PRODUCT_LIST_FAILED:
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

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { isLoading: true };

    case DELETE_PRODUCT_SUCCESS:
      return { isLoading: false };

    case DELETE_PRODUCT_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (
  state = { productDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return { isLoading: true };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return { isLoading: false, productDetails: action.payload };

    case GET_PRODUCT_DETAILS_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
export const getProductImagesReducer = (
  state = { productImages: [] },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_IMAGES_REQUEST:
      return { isLoading: true };

    case GET_PRODUCT_IMAGES_SUCCESS:
      return { isLoading: false, productImages: action.payload };

    case GET_PRODUCT_IMAGES_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
export const getProductFilesReducer = (
  state = { productFiles: [] },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_FILES_REQUEST:
      return { isLoading: true };

    case GET_PRODUCT_FILES_SUCCESS:
      return { isLoading: false, productFiles: action.payload };

    case GET_PRODUCT_FILES_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteProductImageReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_IMAGE_REQUEST:
      return { isLoading: true, success: false };

    case DELETE_PRODUCT_IMAGE_SUCCESS:
      return { isLoading: false, success: true };

    case DELETE_PRODUCT_IMAGE_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteProductFileReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_FILE_REQUEST:
      return { isLoading: true, success: false };

    case DELETE_PRODUCT_FILE_SUCCESS:
      return { isLoading: false, success: true };

    case DELETE_PRODUCT_FILE_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const addProductImageReducer = (state = { addedImage: {} }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_IMAGE_REQUEST:
      return { isLoading: true };

    case ADD_PRODUCT_IMAGE_SUCCESS:
      return { isLoading: false, addedImage: action.payload };

    case ADD_PRODUCT_IMAGE_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const addProductFileReducer = (state = { addedFile: {} }, action) => {
  switch (action.type) {
    case ADD_PRODUCT_FILE_REQUEST:
      return { isLoading: true };

    case ADD_PRODUCT_FILE_SUCCESS:
      return { isLoading: false, addedFile: action.payload };

    case ADD_PRODUCT_FILE_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateProductPATCHReducer = (
  state = { updatedProductPATCH: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_PRODUCT_PATCH_REQUEST:
      return { isLoading: true };

    case UPDATE_PRODUCT_PATCH_SUCCESS:
      return { isLoading: true, updatedProductPATCH: action.payload };

    case UPDATE_PRODUCT_PATCH_FAILED:
      return { isLoading: true, error: action.payload };

    default:
      return state;
  }
};

export const updateProductPUTReducer = (
  state = { updatedProductPUT: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_PRODUCT_PUT_REQUEST:
      return { isLoading: true };

    case UPDATE_PRODUCT_PUT_SUCCESS:
      return { isLoading: true, updatedProductPUT: action.payload };

    case UPDATE_PRODUCT_PUT_FAILED:
      return { isLoading: true, error: action.payload };

    default:
      return state;
  }
};
