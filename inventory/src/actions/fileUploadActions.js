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
import axios from "axios";

export const getAllFilesAction = () => async (dispatch) => {
  dispatch({ type: GET_FILE_REQUEST });
  axios
    .get(`/api/fileup/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_FILE_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_FILE_FAILED, payload: error });
    });
};

export const addFileAction = (formData) => async (dispatch) => {
  dispatch({ type: ADD_FILE_REQUEST });
  axios
    .post(`/api/fileup/`, formData)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: ADD_FILE_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: ADD_FILE_FAILED, payload: error });
    });
};

export const deleteFileAction = (fileId) => async (dispatch) => {
  dispatch({ type: DELETE_FILE_REQUEST });
  axios
    .delete(`/api/fileup/${fileId}/`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
      dispatch({ type: DELETE_FILE_SUCCESS, payload: data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DELETE_FILE_FAILED, payload: error });
    });
};
