import Layout from "./components/Layout";
import { Home, ContactUs } from "./routes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
