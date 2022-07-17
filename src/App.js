import Layout from "./components/Layout";
import { Home, ContactUs, AboutUs } from "./routes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/about"} element={<AboutUs />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
