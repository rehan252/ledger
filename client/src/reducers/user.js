import { AUTH_ERROR, LOGIN_FAIL, LOGOUT } from "../actions/types";

const initialState = {
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  //action has the coming data init
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
