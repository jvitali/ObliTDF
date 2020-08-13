import { ALTA_GASTOS, SHOW_NOTIFICATION } from "./types";
import { gastos } from "../../api";

export function darAltaGasto() {
  return async function (dispatch) {
    try {
      const { data } = await gastos.darAltaGastos();
      // dispatch para el reducer
      dispatch({ type: ALTA_GASTOS, payload: data });
    } catch ({ error, response }) {
      dispatch({ type: SHOW_NOTIFICATION, payload: response.data });
    }
  };
}
