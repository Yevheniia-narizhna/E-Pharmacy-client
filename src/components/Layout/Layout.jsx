import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const pageType = location.pathname.split("/")[1] || "";

  return (
    <div>
      <Header pageType={pageType} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
