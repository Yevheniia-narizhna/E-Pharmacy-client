import { useCallback, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { CloseBtn, Content, ContModal, Overlay } from "./BurgerMenu.styled";
import LinksAuth from "../LinksAuth/LinksAuth";
import { useWindowSize } from "../../../utils/utils";
import { NavBox, NavList, Wrapp } from "../Header.styled";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ isOpen, onClose }) => {
  const windowWidth = useWindowSize();
  const isMobTab = windowWidth <= 1439;
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleContentClick = (e) => e.stopPropagation();

  return (
    <Overlay onClick={onClose}>
      <Content onClick={handleContentClick}>
        <ContModal>
          <CloseBtn type="button" onClick={onClose}>
            <IoClose style={{ color: "#fff" }} />
          </CloseBtn>
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
          <LinksAuth />
        </ContModal>
      </Content>
    </Overlay>
  );
};

export default BurgerMenu;
