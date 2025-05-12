// import { useLocation } from "react-router-dom";
import {
  ContFlex,
  ContFooter,
  Icon,
  ListBottom,
  LogoText,
  NavListFoot,
  Text,
  WrapLogoText,
  WrapNavSoc,
  Wrapper,
  WrapperBottom,
} from "./Footer.styled";
import logoHome from "../../../public/img/logo-wh.png";
import { NavLink } from "react-router-dom";
// import logoOther from "../../../public/img/logo-gr.png";

const Footer = () => {
  //   const location = useLocation();
  //   const isHome = location.pathname === "/home";
  //   const logo = isHome ? logoHome : logoOther;
  return (
    <ContFooter>
      <ContFlex>
        <WrapLogoText>
          <LogoText to="/home">
            <img src={logoHome} alt="logo" />
            <p>E-Pharmacy</p>
          </LogoText>
          <Text>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </Text>
        </WrapLogoText>
        <WrapNavSoc>
          <NavListFoot>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/medicine-store">Medicine store</NavLink>
            </li>
            <li>
              <NavLink to="/medicine">Medicine</NavLink>
            </li>
          </NavListFoot>
          <Wrapper>
            <a
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <svg>
                  <use href="../../../public/symbol-defs.svg#icon-facebook" />
                </svg>
              </Icon>
            </a>
            <a
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <svg>
                  <use href="../../../public/symbol-defs.svg#icon-instagram" />
                </svg>
              </Icon>
            </a>
            <a
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <svg>
                  <use href="../../../public/symbol-defs.svg#icon-youtube" />
                </svg>
              </Icon>
            </a>
          </Wrapper>
        </WrapNavSoc>
      </ContFlex>
      <WrapperBottom>
        <ListBottom>
          <p>© E-Pharmacy 2023. All Rights Reserved</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </ListBottom>
      </WrapperBottom>
    </ContFooter>
  );
};

export default Footer;
