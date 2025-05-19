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
export const Wrapp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 302px;

  @media screen and (min-width: 768px) {
    padding-bottom: 422px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;

    & svg {
      width: 344px;
      height: 46px;
    }
  }
`;

export const NavBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  & li {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  li:first-child {
    margin-bottom: 15px;
  }
  li:last-child {
    margin-top: 14px;
  }

  & a {
    padding: 6px 12px;
    border-radius: 24px;
    display: inline-block;
    min-width: 80px;
  }

  & a.active {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: #3f945f;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 328px;
    align-items: center;

    li:first-child {
      margin-right: 20px;
      margin-bottom: 0;
    }
    li:last-child {
      margin-left: 26px;
      margin-top: 0;
    }

    & a.active {
      background: ${({ theme }) => theme.colors.green};
    }
  }
`;
export const BurgerBtn = styled.button`
  background: transparent;
  border: none;

  & svg {
    width: 32px;
    height: 26px;
  }
`;

export const WhiteSvg = styled.div`
  stroke: #fff;
`;

export const GreenSvg = styled.svg`
  stroke: #59b17a;
`;
