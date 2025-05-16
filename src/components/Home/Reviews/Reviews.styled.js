import styled from "styled-components";
import { Container } from "../../../styles/GlobalStyles";

export const ContRev = styled(Container)`
  padding-bottom: 80px;
  background: ${({ theme }) => theme.colors.lightGray};

  @media screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  padding-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2em;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;
  padding-bottom: 64px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25em;
    padding-bottom: 88px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 28px;
  }
`;

export const Review = styled.li`
  position: relative;
  background: ${({ theme }) => theme.colors.backWhite};
  padding: 78px 16px 32px;
  border-radius: 27px;
  border: 1px solid ${({ theme }) => theme.colors.subWhite};

  & h3 {
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5em;
    padding-bottom: 16px;
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
  }
  @media screen and (min-width: 768px) {
    flex: 1;
    padding: 54px 16px 32px;
    min-width: 344px;
  }

  @media screen and (min-width: 1440px) {
    padding: 54px 28px 32px;
    min-width: 382px;
  }
`;

export const ImgBox = styled.div`
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  border-radius: 64px;
  box-shadow: 0px 1px 4px 0px ${({ theme }) => theme.borders.shadowRev};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;
