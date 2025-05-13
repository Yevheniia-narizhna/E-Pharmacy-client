import styled from "styled-components";
import { Container } from "../../../styles/GlobalStyles";

export const ContPromo = styled(Container)`
  padding-top: 40px;
  padding-bottom: 80px;
  background: ${({ theme }) => theme.colors.lightGray};

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 64px;
    padding-bottom: 120px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    width: 670px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 28px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const Banner = styled.li`
  background: ${({ theme }) => theme.colors.backWhite};
  padding: 14px 18px;
  border-radius: 27px;
  border: 1.15px solid ${({ theme }) => theme.borders.banner};
  box-shadow: 0px -1px 13.858px 0px ${({ theme }) => theme.borders.shadowBann};

  @media only screen and (min-width: 768px) {
    width: 321px;
  }
`;

export const RoundTitle = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 14px;
`;

export const Round = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.round};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.green};
  font-size: 24px;
  font-weight: 400;
  line-height: 1em;

  @media only screen and (min-width: 768px) {
    width: 74px;
    height: 74px;
    font-size: 28px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.titleRound};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4em;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 145px;
  align-items: baseline;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    gap: 28px;
    width: auto;
    justify-content: flex-start;
  }
`;

export const Percentage = styled.p`
  color: ${({ theme }) => theme.colors.titleRound};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4em;

  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Btn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4em;
`;
