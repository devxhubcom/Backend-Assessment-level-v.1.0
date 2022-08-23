import axios from "axios";
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILED,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
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
  GET_PRODUCT_SUMMARY_REQUEST,
  GET_PRODUCT_SUMMARY_SUCCESS,
  GET_PRODUCT_SUMMARY_FAILED,
} from "../constants/productConstants";

export const getProductListAction = (categoryId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LIST_REQUEST });
  axios
    .get(`/store/categories/${categoryId}/products/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: GET_PRODUCT_LIST_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_PRODUCT_LIST_FAILED, payload: error });
    });
};

export const addProductAction = (categoryId, formData) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  axios
    .post(`/store/categories/${categoryId}/products/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
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

export const deleteProductAction = (categoryId, id) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  axios
    .delete(`/store/categories/${categoryId}/products/${id}`)
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

export const getProductDetailsAction = (categoryId, id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });

  axios
    .get(`/store/categories/${categoryId}/products/${id}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_PRODUCT_DETAILS_FAILED, payload: error });
    });
};

export const getProductImagesAction = (categoryId, id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_IMAGES_REQUEST });

  axios
    .get(`/store/categories/${categoryId}/products/${id}/images/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_PRODUCT_IMAGES_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_PRODUCT_IMAGES_FAILED, payload: error });
    });
};

export const getProductFilesAction = (categoryId, id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_FILES_REQUEST });

  axios
    .get(`/store/categories/${categoryId}/products/${id}/files/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_PRODUCT_FILES_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_PRODUCT_FILES_FAILED, payload: error });
    });
};

export const deleteProductImageAction =
  (categoryId, id, imageId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_IMAGE_REQUEST });

    axios
      .delete(
        `/store/categories/${categoryId}/products/${id}/images/${imageId}/`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: DELETE_PRODUCT_IMAGE_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: DELETE_PRODUCT_IMAGE_FAILED, payload: error });
      });
  };

export const deleteProductFileAction =
  (categoryId, id, fileId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_FILE_REQUEST });

    axios
      .delete(`/store/categories/${categoryId}/products/${id}/files/${fileId}/`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: DELETE_PRODUCT_FILE_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: DELETE_PRODUCT_FILE_FAILED, payload: error });
      });
  };

export const addProductImageAction =
  (categoryId, id, formData) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_IMAGE_REQUEST });

    axios
      .post(
        `/store/categories/${categoryId}/products/${id}/images/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: ADD_PRODUCT_IMAGE_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ADD_PRODUCT_IMAGE_FAILED, payload: error });
      });
  };

export const addProductFileAction =
  (categoryId, id, formData) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_FILE_REQUEST });

    axios
      .post(`/store/categories/${categoryId}/products/${id}/files/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: ADD_PRODUCT_FILE_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ADD_PRODUCT_FILE_FAILED, payload: error });
      });
  };

export const updateProductPATCHAction =
  (categoryId, id, formData) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_PATCH_REQUEST });

    axios
      .patch(`/store/categories/${categoryId}/products/${id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: UPDATE_PRODUCT_PATCH_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: UPDATE_PRODUCT_PATCH_FAILED, payload: error });
      });
  };

export const updateProductPUTAction =
  (categoryId, id, formData) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_PUT_REQUEST });

    axios
      .put(`/store/categories/${categoryId}/products/${id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: UPDATE_PRODUCT_PUT_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: UPDATE_PRODUCT_PUT_FAILED, payload: error });
      });
  };

export const getProductSummaryListAction = (categoryId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_SUMMARY_REQUEST });
  axios
    .get(`/store/categories-summary/${categoryId}/products-summary/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: GET_PRODUCT_SUMMARY_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_PRODUCT_SUMMARY_FAILED, payload: error });
    });
};
