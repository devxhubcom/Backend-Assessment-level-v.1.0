import {
  ADD_FILE_REQUEST,
  ADD_FILE_SUCCESS,
  ADD_FILE_FAILED,
  GET_FILE_REQUEST,
  GET_FILE_SUCCESS,
  GET_FILE_FAILED,
  DELETE_FILE_REQUEST,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_FAILED,
} from "../constants/fileUploadConstants";

export const addFileReducer = (state = { addedFile: {} }, action) => {
  switch (action.type) {
    case ADD_FILE_REQUEST:
      return { isLoading: true };

    case ADD_FILE_SUCCESS:
      return { isLoading: false, addedFile: action.payload };

    case ADD_FILE_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const getFileReducer = (state = { fileList: [] }, action) => {
  switch (action.type) {
    case GET_FILE_REQUEST:
      return { isLoading: true };

    case GET_FILE_SUCCESS:
      return { isLoading: false, fileList: action.payload };

    case GET_FILE_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteFileReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FILE_REQUEST:
      return { isLoading: true };

    case DELETE_FILE_SUCCESS:
      return { isLoading: false, success: true };

    case DELETE_FILE_FAILED:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
