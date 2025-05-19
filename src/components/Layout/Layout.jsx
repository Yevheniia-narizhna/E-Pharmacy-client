import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearToken, getUserInfo, setToken } from "../../redux/auth/operations";

const Layout = () => {
  const location = useLocation();
  const pageType = location.pathname.split("/")[1] || "";
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setToken(token);
      dispatch(getUserInfo())
        .unwrap()
        .catch(() => {
          clearToken();
          localStorage.removeItem("accessToken");
        });
    }
  }, [dispatch]);

  return (
    <div>
      <Header pageType={pageType} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
