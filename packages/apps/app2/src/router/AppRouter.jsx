import { Route, Routes } from "react-router-dom";
import { Nav } from "../ui/";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Nav />} />

        <Route path="app2/a" element={<h5>Page a</h5>} />
        <Route path="app2/b" element={<h5>Page b</h5>} />
      </Routes>
    </>
  );
};
