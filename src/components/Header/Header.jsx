import logoHome from "../../../public/img/logo-wh.png";
import logoOther from "../../../public/img/logo-gr.png";
import { NavLink, useLocation } from "react-router-dom";
import {
  ContHeader,
  LogoHeader,
  NavBox,
  NavList,
  Wrapp,
} from "./Header.styled";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const logo = isHome ? logoHome : logoOther;
  const textColor = isHome ? "#FFF" : "#1D1E21";
  const headerBackground = isHome ? "#59B17A" : "#F7F8FA";
  const isMobTab = useMediaQuery({ query: "(max-width: 1439px)" });

  return (
    <ContHeader style={{ background: headerBackground }}>
      <LogoHeader to="/home">
        <img src={logo} alt="logo" />
        <p style={{ color: textColor }}>E-Pharmacy</p>
      </LogoHeader>
      <Wrapp>
        {isMobTab ? (
          <img src="/img/buttons-mob.png" alt="Vertical Navigation" />
        ) : (
          <img src="/img/buttons.png" alt="Horizontal Navigation" />
        )}
        <NavBox>
          <NavList>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/medicine-store">Medicine store</NavLink>
            </li>
            <li>
              <NavLink to="/medicine">Medicine</NavLink>
            </li>
          </NavList>
        </NavBox>
      </Wrapp>
    </ContHeader>
  );
};

export default Header;
