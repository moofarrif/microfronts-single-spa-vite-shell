import { types } from "../types/types";
import { AuthState, initialState } from "./AuthContext";

export const authReducer = (
  state: AuthState = initialState,
  action: { type: types; payload?: any }
) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
