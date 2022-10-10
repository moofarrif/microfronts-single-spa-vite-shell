import React from "react";
import { AppRouter } from "./router/AppRouter.jsx";

type Props = {};

export const App1 = (props: Props) => {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
};
