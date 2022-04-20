import {
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
} from '../actions/actionTypes';
const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIRSTNAME: {
      const newFirstName = action.payload;
      return { ...state, firstName: newFirstName };
    }
    case UPDATE_LASTNAME: {
      const newLastName = action.payload;
      return { ...state, lastName: newLastName };
    }
    case UPDATE_USERNAME: {
      const newUsername = action.payload;
      return { ...state, username: newUsername };
    }

    case UPDATE_PASSWORD: {
      const newPassword = action.payload;
      return { ...state, password: newPassword };
    }

    default:
      return state;
  }
}

export default signupReducer;
