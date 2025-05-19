import { NavLink, useLocation } from "react-router-dom";
import { useWindowSize } from "../../../../utils/utils";
import { Btn } from "../LogBtn/Btns.styled";

export const RegBtn = () => {
  const windowWidth = useWindowSize();
  const isDesktop = windowWidth >= 1440;
  const location = useLocation();
  const pageType = location.pathname.split("/")[1];

  const btnColor = !isDesktop
    ? "#f1f1f1"
    : pageType === "home"
    ? "#f1f1f1"
    : "#59B17A";

  const btnBorder = !isDesktop
    ? "1px solid rgba(241, 241, 241, 0.50)"
    : pageType === "home"
    ? "1px solid rgba(241, 241, 241, 0.50)"
    : "1px solid rgba(89, 177, 122, 0.50)";

  return (
    <Btn
      color={btnColor}
      border={btnBorder}
      padding="13px 32px"
      $paddingMd="16px 32px"
    >
      <NavLink
        to="/register"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        Register
      </NavLink>
    </Btn>
  );
};
