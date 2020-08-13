import { GET_RUBROS } from "../actions/types";

const initialState = {
  rubros: null,
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RUBROS:
      return {
        ...state,
        rubros: action.payload,
      };

    default:
      return state;
  }
}
