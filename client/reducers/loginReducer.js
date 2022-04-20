import { ENTER_USERNAME, ENTER_PASSWORD } from '../actions/actionTypes';
const initialState = {
  username: '',
  password: '',
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_USERNAME: {
      return { ...state, username: action.payload };
    }
    case ENTER_PASSWORD: {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
};

export default loginReducer;
