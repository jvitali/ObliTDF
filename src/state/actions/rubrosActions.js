import { GET_RUBROS, SHOW_NOTIFICATION } from "./types";
import { rubros } from "../../api";

export function getRubros() {
  return async function (dispatch) {
    try {
      const { data } = await rubros.obtenerRubros();

      dispatch({ type: GET_RUBROS, payload: data });
    } catch ({ error, response }) {
      dispatch({ type: SHOW_NOTIFICATION, payload: response.data });
    }
  };
}
