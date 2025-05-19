import { useDispatch, useSelector } from "react-redux";
import { CartBtn, CartItems, UserIcon, Wrapp } from "./CartUser.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCartItems } from "../../../redux/pharm/operations";
import { getUserInfo } from "../../../redux/auth/operations";

const CartUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.pharm.cart);
  const location = useLocation();
  const pageType = location.pathname.split("/")[1];
  const cartItemsQuantity = cart?.cartProducts?.length || 0;

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const handleCartClick = () => {
    navigate("/cart");
  };

  const iconBackground =
    pageType === "home" ? "#F1F1F1" : "rgba(89, 177, 122, 0.10)";

  return (
    <Wrapp>
      <CartBtn onClick={handleCartClick}>
        <svg>
          <use href="../../../../public/symbol-defs.svg#icon-shopping-cart" />
        </svg>
        <CartItems>{cartItemsQuantity}</CartItems>
      </CartBtn>
      <UserIcon $bg={iconBackground}>
        {user?.name?.charAt(0).toUpperCase() || "?"}
      </UserIcon>
    </Wrapp>
  );
};
export default CartUser;
