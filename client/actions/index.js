import { UPDATE_LASTNAME, UPDATE_FIRSTNAME } from './actionTypes';

export const updateFirstName = (firstName) => ({
  type: UPDATE_FIRSTNAME,
  payload: firstName,
});

export const updateLastName = (lastName) => ({
  type: UPDATE_LASTNAME,
  payload: lastName,
});
