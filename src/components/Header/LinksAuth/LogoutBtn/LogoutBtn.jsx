import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../../utils/utils";
import { logout } from "../../../../redux/auth/operations";
import { Btn } from "../LogBtn/Btns.styled";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const windowWidth = useWindowSize();
  const isDesktop = windowWidth >= 1440;
  const location = useLocation();
  const pageType = location.pathname.split("/")[1];

  const handleLogoutClick = () => {
    dispatch(logout());
    if (pageType === "cart") {
      navigate("/home");
    }
  };

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
      padding="13px 28px"
      $paddingMd="15px 32px"
      onClick={handleLogoutClick}
      style={{ cursor: "pointer" }}
    >
      Log out
    </Btn>
  );
};
