import React from "react";
import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

function Shell() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default Shell;
