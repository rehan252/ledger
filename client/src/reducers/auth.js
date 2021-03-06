import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: '',
  user: '',
  refresh:''
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", "Bearer " + payload.access);
      return {
        ...state,
        isAuthenticated: true,
        usertype: payload.usertype,
        refresh: "Bearer " + payload.refresh,
        token:  "Bearer " + payload.access,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };

    default:
      return state;
  }
}
