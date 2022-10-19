import { Header, Footer, Sidebar } from "../../ui";

export const HomeRoutes = () => {
  return (
    <>
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
