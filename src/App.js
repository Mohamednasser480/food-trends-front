import Layout from './components/Layout';
import { Home, ContactUs, UserAcount } from './routes';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './routes/AboutUs';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/contact-us'} element={<ContactUs />} />
          <Route path={'/about'} element={<AboutUs />} />
          <Route path={'/user-account'} element={<UserAcount />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
