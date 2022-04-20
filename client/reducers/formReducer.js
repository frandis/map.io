import {
  GET_FORM_DATA,
  UPDATE_TITLE,
  UPDATE_DATE,
  UPDATE_DESC,
  UPDATE_TECH,
  UPDATE_STATUS,
  CLEAR_FORM,
} from '../actions/actionTypes';
const initialState = {
  title: '',
  description: '',
  technologies: '',
  status: '',
  date: '',
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM_DATA: {
      return { ...action.paylaod };
    }
    case UPDATE_TITLE: {
      return { ...state, title: action.payload };
    }
    case UPDATE_DESC: {
      return { ...state, description: action.payload };
    }
    case UPDATE_TECH: {
      return { ...state, technologies: action.payload };
    }
    case UPDATE_DATE: {
      return { ...state, date: action.payload };
    }
    case UPDATE_STATUS: {
      return { ...state, status: action.payload };
    }
    case CLEAR_FORM: {
      return initialState;
    }
    default:
      return state;
  }
};

export default formReducer;
