import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import formReducer from './formReducer';

export default combineReducers({
  signup: signupReducer,
  login: loginReducer,
  form: formReducer,
});
