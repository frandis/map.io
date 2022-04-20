import {
  UPDATE_LASTNAME,
  UPDATE_FIRSTNAME,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  ENTER_PASSWORD,
  ENTER_USERNAME,
  UPDATE_DATE,
  UPDATE_DESC,
  UPDATE_TECH,
  UPDATE_TITLE,
  GET_FORM_DATA,
  UPDATE_STATUS,
  CLEAR_FORM,
} from './actionTypes';

/* SIGNUP ACTIONS */
export const updateFirstName = (firstName) => ({
  type: UPDATE_FIRSTNAME,
  payload: firstName,
});

export const updateLastName = (lastName) => ({
  type: UPDATE_LASTNAME,
  payload: lastName,
});

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  payload: username,
});

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  payload: password,
});

/* LOGIN ACTIONS */
export const enterUsername = (username) => ({
  type: ENTER_USERNAME,
  payload: username,
});

export const enterPassword = (password) => ({
  type: ENTER_PASSWORD,
  payload: password,
});

/* PROJECT FORM ACTIONS */

export const retrieveFormData = (projectData) => ({
  type: GET_FORM_DATA,
  payload: projectData,
});

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  payload: title,
});

export const updateDate = (date) => ({
  type: UPDATE_DATE,
  payload: date,
});

export const updateTech = (tech) => ({
  type: UPDATE_TECH,
  payload: tech,
});
export const updateDesc = (desc) => ({
  type: UPDATE_DESC,
  payload: desc,
});

export const updateStatus = (status) => ({
  type: UPDATE_STATUS,
  payload: status,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});
