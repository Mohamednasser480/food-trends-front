import { useEffect } from "react";
import Layout from "./components/Layout";
import {
  Home,
  ContactUs,
  AboutUs,
  Cart,
  UserAcount,
  ProductPage,
} from "./routes";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(cartActions.fetchCartItems());
  }, []);

  useEffect(() => {
    if (!isInitial) {
      dispatch(cartActions.saveCartItems(cartItems));
    }
    isInitial = false;
  }, [cartItems]);

  // Iniate Animation
  Aos.init({
    once: "true",
  });

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/about"} element={<AboutUs />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/user-account"} element={<UserAcount />} />
          <Route path={"/shop/:id"} element={<ProductPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
