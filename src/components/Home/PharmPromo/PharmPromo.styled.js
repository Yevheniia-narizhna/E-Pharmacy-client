import styled from "styled-components";
import { Container } from "../../../styles/GlobalStyles";

export const ContPharmPromo = styled(Container)`
  padding-bottom: 91px;
  background: ${({ theme }) => theme.colors.lightGray};

  @media screen and (min-width: 768px) {
    padding-bottom: 130px;
  }
`;

export const Wrapper = styled.div`
  padding: 40px 20px 20px 20px;
  border-radius: 32px;
  background: ${({ theme }) => theme.colors.green};
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    padding: 104px 48px 40px;
    margin-bottom: 73px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 40px 40px 80px;
    display: flex;
    gap: 19px;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: #f1f1f1;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  letter-spacing: -0.28px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: -0.48px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 501px;
  }
`;

export const Text = styled.p`
  color: #f1f1f1;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 488px;
    font-size: 16px;
    line-height: 1.25em;
  }
`;

export const Btn = styled.button`
  background: transparent;
  margin-bottom: 39px;

  & a {
    display: block;
    border-radius: 60px;
    padding: 13px 32px;
    border: 1px solid rgba(241, 241, 241, 0.5);
    color: #f1f1f1;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28em;
    transition: 0.3s ease;

    &:hover {
      background: #f1f1f1;
      color: ${({ theme }) => theme.colors.green};
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 83px;

    & a {
      padding: 13px 50px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const ImgBox = styled.div`
  & img {
    border-radius: 0px 24px 24px 0px;
    width: 310px;
    height: 335px;
  }

  @media screen and (min-width: 768px) {
    & img {
      width: 633px;
      height: 406px;
    }
  }
  @media screen and (max-width: 375px) {
    & img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      overflow: hidden;
      display: block;
    }
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-right: 16px;
  column-gap: 43px;
  row-gap: 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: none;
  }

  & > li {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  @media screen and (min-width: 1130px) {
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.28em;
  letter-spacing: -0.28px;

  & svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25em;
    letter-spacing: -0.32px;
  }
`;
