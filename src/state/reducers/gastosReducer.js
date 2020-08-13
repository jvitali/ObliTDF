import { ALTA_GASTOS } from "../actions/types";

// TODO pensar estado inicial
const initialState = {
  gastos: null,
};

export default function gastosReducer(state = initialState, action) {
  switch (action.type) {
    case ALTA_GASTOS:
      return {
        ...state,
      };
    /*   case GET_GASTOS:
      return { ...state, gastos: action.payload }; */
    default:
      return state;
  }
}
