import { Header, Footer, Sidebar } from "../../ui";

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
        <div style={{ width: "80%", background: "#e8d7f1" }}></div>
      </div>
      <Footer />
    </>
  );
};
