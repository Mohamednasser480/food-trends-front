import Layout from "./components/Layout";
import { Home, ContactUs } from "./routes";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./routes/AboutUs";
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
