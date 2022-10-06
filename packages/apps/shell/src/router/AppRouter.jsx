import { Route, Routes } from "react-router-dom";

import { HomeRoutes } from "../home";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                {/* rutas pubicas */}
                <Route path="/*" element={<LoginPage />} />
                <Route path="/zona-1" element={<h1>zona publica 1 </h1>} />
                <Route path="/zona-2" element={<h1>zona publica </h1>} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HomeRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
