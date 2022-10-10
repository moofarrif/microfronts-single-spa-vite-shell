import { Route, Routes } from "react-router-dom";
import { Nav } from "../ui/index";
//TODO Dinamizar prefix cusotmprops? context?

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Nav />} />
        <Route path="app1/a" element={<h5>Page a</h5>} />
        <Route path="app1/b" element={<h5>Page b</h5>} />
      </Routes>
    </>
  );
};
