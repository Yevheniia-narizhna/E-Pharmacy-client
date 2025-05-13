import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const ContHeader = styled(Container)`
  padding-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.lightGray};

  @media only screen and (min-width: 768px) {
    padding-top: 28px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const LogoHeader = styled(NavLink)`
  display: flex;
  gap: 12px;
  align-items: center;

  & img {
    width: 32px;
    height: 32px;
  }

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.48px;
  }

  @media only screen and (min-width: 768px) {
    gap: 14px;

    & img {
      width: 44px;
      height: 44px;
    }

    & p {
      font-size: 20px;
      letter-spacing: -0.6px;
    }
  }
`;
