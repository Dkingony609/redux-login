import { IS_AUTHENTICATED } from "../constants";
import { USER_DETAILS } from "../constants";

export const authAction = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: IS_AUTHENTICATED, payload: true });
        dispatch({
          type: USER_DETAILS,
          payload: {
            name: "Eze",
            phoneNumber: "+2348134490002",
            ...payload
          }
        });
        return resolve({ status: 200, success: "OK" });
      }, 3000);
    });
  };
};
