import logoHome from "/img/logo-wh.png";
import logoOther from "/img/logo-gr.png";
import { NavLink, useLocation } from "react-router-dom";
import {
  BurgerBtn,
  ContHeader,
  GreenSvg,
  LogoHeader,
  NavBox,
  NavList,
  WhiteSvg,
  Wrapp,
  WrappLeftBtn,
} from "./Header.styled";

import LinksAuth from "./LinksAuth/LinksAuth";
import { useWindowSize } from "../../utils/utils";
// import { useSelector } from "react-redux";
import CartUser from "./CartUser/CartUser";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const logo = isHome ? logoHome : logoOther;
  const textColor = isHome ? "#FFF" : "#1D1E21";
  const headerBackground = isHome ? "#59B17A" : "#F7F8FA";
  const windowWidth = useWindowSize();
  const isMobTab = windowWidth <= 1439;
  const isDesktop = windowWidth >= 1440;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <ContHeader style={{ background: headerBackground }}>
        <LogoHeader to="/home">
          <img src={logo} alt="logo" />
          <p style={{ color: textColor }}>E-Pharmacy</p>
        </LogoHeader>
        {isDesktop && (
          <>
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
          </>
        )}
        <WrappLeftBtn>
          {!isHome && isLoggedIn && <CartUser />}
          {isDesktop ? (
            <LinksAuth />
          ) : (
            <BurgerBtn type="button" onClick={handleOpenMenu}>
              {isHome ? (
                <WhiteSvg>
                  <img src="/img/align-justify.png" alt="burger menu" />
                </WhiteSvg>
              ) : (
                <GreenSvg>
                  <use href="/symbol-defs.svg#icon-burger" />
                </GreenSvg>
              )}
            </BurgerBtn>
          )}
        </WrappLeftBtn>
      </ContHeader>
      <BurgerMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
