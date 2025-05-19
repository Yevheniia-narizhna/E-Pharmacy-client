import { NavLink, useLocation } from "react-router-dom";
import { useWindowSize } from "../../../../utils/utils";
import { Btn } from "./Btns.styled";

export const LogBtn = () => {
  const windowWidth = useWindowSize();
  const isDesktop = windowWidth >= 1440;
  const location = useLocation();
  const pageType = location.pathname.split("/")[1];

  const btnColor = !isDesktop
    ? "#F1F1F1"
    : pageType === "home"
    ? "#f1f1f1"
    : "#59B17A";

  return (
    <Btn color={btnColor} $underline padding="0" $paddingMd="0">
      <NavLink to="/login" style={{ color: "inherit", textDecoration: "none" }}>
        Login
      </NavLink>
    </Btn>
  );
};
