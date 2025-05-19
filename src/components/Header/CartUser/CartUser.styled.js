import styled from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const CartBtn = styled.button`
  position: relative;
  background: #f1f1f1;
  box-shadow: 0px -1px 7px rgba(71, 71, 71, 0.05);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 16px;
    height: 16px;
  }

  @media only screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const CartItems = styled.div`
  position: absolute;
  background: #e7f1ed;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  top: -2px;
  right: -2px;
  color: ${({ theme }) => theme.colors.green};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${({ $bg }) => $bg};
  box-shadow: 0px -1px 7px rgba(71, 71, 71, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.green};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4em;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
