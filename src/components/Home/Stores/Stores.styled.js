import styled from "styled-components";
import { Container } from "../../../styles/GlobalStyles";

export const ContStores = styled(Container)`
  padding-bottom: 80px;
  background: ${({ theme }) => theme.colors.lightGray};

  @media only screen and (min-width: 768px) {
    padding-bottom: 120px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-bottom: 14px;

  @media only screen and (min-width: 768px) {
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
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25em;
    margin-bottom: 64px;
  }
`;
