import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

interface IApp {}
const lifecycles = singleSpaReact({
  // @ts-ignore

  React,
  // @ts-ignore

  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return (
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        Error popo
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
