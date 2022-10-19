import { Route, Routes } from "react-router-dom";

import { HomeRoutes } from "../home";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index path="login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HomeRoutes />
            </PrivateRoute>
          }
        />
        <Route
          path="public-zone/*"
          element={
            <PublicRoute>
              <Routes>
                {/* rutas pubicas */}
                <Route path="/" element={<h1>landing page (?)</h1>} />
                <Route path="/zone-1" element={<h1>zona publica 1 </h1>} />
                <Route path="/zone-2" element={<h1>zona publica </h1>} />
                <Route path="*" element={<h1>404</h1>}></Route>
              </Routes>
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
