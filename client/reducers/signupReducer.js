import { UPDATE_FIRSTNAME, UPDATE_LASTNAME } from '../actions/actionTypes';
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIRSTNAME: {
      const newFirstName = (state.firstName += action.payload);
      return { ...state, firstName: newFirstName };
    }
    case UPDATE_LASTNAME: {
      const newLastName = (state.lastName += action.payload);
      return { ...state, lastName: newLastName };
    }

    default:
      return state;
  }
}

export default signupReducer;
