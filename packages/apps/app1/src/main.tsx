import React from "react";
import { BrowserRouter } from "react-router-dom";
import { App1 } from "./App1";

type Props = {
  prefixPath: string;
};

export const main = ({ prefixPath }) => {
  return (
    <React.StrictMode>
      App 1 React works!
      <hr />
      <BrowserRouter>
        <App1 />
      </BrowserRouter>
    </React.StrictMode>
  );
};
