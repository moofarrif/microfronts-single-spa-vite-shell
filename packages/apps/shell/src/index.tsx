import React from "react";
import ReactDOM from "react-dom/client";
import ShellApp from "./ShellApp";
import { LifeCycles, registerApplication, start } from "single-spa";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShellApp />
    </BrowserRouter>
  </React.StrictMode>
);

// registerApplication({
//   name: "@single-spa/welcome",
//   app: (): Promise<LifeCycles> =>
//     (window as any).System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/app"],
// });

start();

reportWebVitals();
