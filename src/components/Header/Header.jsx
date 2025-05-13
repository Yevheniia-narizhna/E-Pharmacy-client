import logoHome from "../../../public/img/logo-wh.png";
import logoOther from "../../../public/img/logo-gr.png";
import { useLocation } from "react-router-dom";
import { ContHeader, LogoHeader } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const logo = isHome ? logoHome : logoOther;
  const textColor = isHome ? "#FFF" : "#1D1E21";
  const headerBackground = isHome ? "#59B17A" : "#F7F8FA";

  return (
    <ContHeader style={{ background: headerBackground }}>
      <LogoHeader to="/home">
        <img src={logo} alt="logo" />
        <p style={{ color: textColor }}>E-Pharmacy</p>
      </LogoHeader>
    </ContHeader>
  );
};

export default Header;
