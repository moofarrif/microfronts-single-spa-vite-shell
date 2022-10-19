import React, { PropsWithChildren, ReactNode, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth";

interface Props {
  children: ReactNode;
}
// 4368

export const PrivateRoute = ({ children }: any) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
