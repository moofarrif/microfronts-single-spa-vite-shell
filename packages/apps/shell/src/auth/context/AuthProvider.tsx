import React, { useReducer } from "react";
import { AuthContext, AuthState, initialState } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from "../types/types";

// const initialState = {
//     logged: false,
// }

const init = () => {
  const isUser = localStorage.getItem("user");
  const user = isUser ? JSON.parse(isUser) : "";

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);
  const login = (name = "") => {
    const user = { id: "ABC", name };
    const action = { type: types.login, payload: user };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,

        // Methods
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
