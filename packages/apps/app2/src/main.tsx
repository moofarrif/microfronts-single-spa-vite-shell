import React from "react";
import { BrowserRouter } from "react-router-dom";
import { App2 } from "./App2";

type Props = {
  prefixPath: string;
};

export const main = ({ prefixPath }) => {
  return (
    <React.StrictMode>
      App 2 React works!
      <hr />
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </React.StrictMode>
  );
};
