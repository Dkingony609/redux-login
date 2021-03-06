import { IS_LOADING } from "../constants";

const initialState = {
  isLoading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default loadingReducer;
