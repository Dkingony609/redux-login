import { IS_AUTHENTICATED, LOGOUT, USER_DETAILS } from "../constants";

const initialState = {
  isAuthenticated: false,
  userDetails: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case USER_DETAILS:
      return { ...state, userDetails: action.payload };
    case LOGOUT:
      return { isAuthenticated: false, userDetails: null };
    default:
      return state;
  }
};

export default authReducer;
