import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";
import { NavLink } from "react-router-dom";

export const ContFooter = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.colors.green};

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 128px;
  }
`;

export const ContFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 88px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 64px;
  }
`;

export const WrapLogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const WrapNavSoc = styled.div`
//   padding-top: 40px;

//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     padding-top: 9px;
//   }

//   @media screen and (min-width: 1440px) {
//     flex-direction: row;
//     padding-top: 0;
//     min-width: 758px;
//     justify-content: space-between;
//   }
//   @media screen and (min-width: 1600px) {
//     min-width: 900px;
//   }
// `;

export const LogoText = styled(NavLink)`
  display: flex;
  gap: 12px;
  align-items: center;

  & img {
    width: 32px;
    height: 32px;
  }

  & p {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 768px) {
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
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  width: 261px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25em;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 311px;
  }
`;
export const NavListFoot = styled.ul`
  display: flex;
  gap: 32px;
  margin-bottom: 80px;
  margin-top: 40px;

  & a {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28em;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 32px;
    width: 100%;
    justify-content: flex-end;
    margin-right: -154px;

    & a {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1440px) {
    gap: 50px;
    margin-bottom: 0;
    margin-right: 100px;
    width: 332px;
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: none;
  gap: 12px;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 52px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 0;
  }
`;

export const Icon = styled.div`
  padding: 8px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borders.icon};
  width: 44px;
  height: 44px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.borders.iconHover};
  }

  & svg {
    width: 28px;
    height: 28px;
  }
`;
export const WrapperBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borders.outline};
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 33px;
  }
`;
export const ListBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 10px;
  font-weight: 400;
  line-height: 1em;

  @media screen and (min-width: 768px) {
    gap: 24px;
    font-size: 14px;
    line-height: 1.28em;
  }
  p:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.borders.outline};
    padding-right: 10px;

    @media screen and (min-width: 768px) {
      padding-right: 24px;
    }
  }
`;
