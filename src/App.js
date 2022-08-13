import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./components/Layout";
import Aos from "aos";
import { cookie } from "./services";
import { getUserData } from "./store/slices/auth";
import { fetchCartData } from "./store/slices/cart";
import { selectStatus } from "./store/slices/auth";
// import { Wishlist } from "./components/UserAccount";

function App() {
  const userStatus = useSelector(selectStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = cookie.getCookie("token");
    if (token) {
      dispatch(getUserData(token));
    }
  }, []);

  // Initiate Animation
  Aos.init({
    once: "true",
  });

  return (
    <div className="App">
      {/*<Layout>*/}
      {/*  <Routes>*/}
      {/*    <Route path={"/"} element={<Home />} />*/}
      {/*    <Route path={"/contact-us"} element={<ContactUs />} />*/}
      {/*    <Route path={"/about"} element={<AboutUs />} />*/}
      {/*    <Route path={"/cart"} element={<Cart />} />*/}
      {/*    <Route path={"/user-account"} element={<UserAccount />} />*/}
      {/*    <Route path={"/shop"} element={<Shop />} />*/}
      {/*    <Route path={"/shop/:id"} element={<ProductPage />} />*/}
      {/*    <Route path={"/categories/"} element={<Categories />} />*/}
      {/*    <Route path={"/categories/:category"} element={<Shop />} />*/}
      {/*    <Route path={"/search/:searchText"} element={<SearchPage />} />*/}
      {/*    <Route path={"*"} element={<Error404 />} />*/}
      {/*    <Route path={"/wishlist"} element={<Wishlist />} />*/}
      {/*  </Routes>*/}
      {/*</Layout>*/}
      <Layout />
    </div>
  );
}

export default App;
