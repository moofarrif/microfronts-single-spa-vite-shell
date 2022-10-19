import React from "react";
// import ReactDOM from "react-dom/client";
import ShellApp from "./ShellApp";
import { LifeCycles, registerApplication, start } from "single-spa";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import "zone.js/dist/zone";

import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShellApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ShellApp />
//     </BrowserRouter>
//   </React.StrictMode>
// );

registerApplication({
  name: "@jc/app1",
  app: (): Promise<LifeCycles> => (window as any).System.import("@jc/app1"),
  activeWhen: ["/app1"],
});
registerApplication({
  name: "@jc/app2",
  app: (): Promise<LifeCycles> => (window as any).System.import("@jc/app2"),
  activeWhen: ["/app2"],
});
registerApplication({
  name: "@jc/app3",
  app: (): Promise<LifeCycles> => (window as any).System.import("@jc/app3"),
  activeWhen: ["/app3"],
});
registerApplication({
  name: "@jc/app4",
  app: (): Promise<LifeCycles> => (window as any).System.import("@jc/app4"),
  activeWhen: ["/app4"],
});

start({ urlRerouteOnly: true });
