import { Header, Footer, Sidebar } from "../../ui";
import { LifeCycles, registerApplication } from "single-spa";
import { Outlet } from "react-router-dom";

export const HomeRoutes = () => {
  return (
    <>
      {/* <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes> */}
      <Header />
      <div style={{ display: "flex", height: "80vh" }}>
        <Sidebar />
        <div className="" style={{ width: "80%", background: "#e8d7f1" }}>
          <div>
            <div id="single-spa-application:@jc/app1"></div>
            <div id="single-spa-application:@jc/app2"></div>
            <div id="single-spa-application:@jc/app3"></div>
            <div id="single-spa-application:@jc/app4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
