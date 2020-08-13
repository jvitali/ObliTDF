import {
  LOGOUT,
  LOGIN_SUCCESS,
  AUTH_LOADING,
  AUTH_LOGGED_USER,
  SHOW_NOTIFICATION,
} from "./types";
import { authentication, users } from "../../api";

export function login(values) {
  return async function (dispatch) {
    dispatch({
      type: AUTH_LOADING,
      payload: true,
    });
    try {
      const { data } = await authentication.getAuthentication(values);
      // TODO guardar la api que te devuelve el llamado de login
      const auth = { token: data.accessToken, email: values.email };
      // TODO guardar api key
      localStorage.setItem("auth", JSON.stringify(auth));
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch ({ error, response }) {
      dispatch({
        type: AUTH_LOADING,
        payload: false,
      });
      dispatch({ type: SHOW_NOTIFICATION, payload: response.data });
    }
  };
}

export const getLoggedUser = (email) => async (dispatch) => {
  const { data } = await users.getUser(email);

  dispatch({
    type: AUTH_LOGGED_USER,
    payload: data[0],
  });
};

export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });

  localStorage.clear();
};
