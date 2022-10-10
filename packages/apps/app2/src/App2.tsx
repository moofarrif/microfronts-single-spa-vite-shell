import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter.jsx";
import { Nav } from "./ui/index";

type Props = {};

export const App2 = (props: Props) => {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
};
