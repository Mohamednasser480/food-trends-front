import Layout from "./components/Layout";
import { Home } from "./routes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
