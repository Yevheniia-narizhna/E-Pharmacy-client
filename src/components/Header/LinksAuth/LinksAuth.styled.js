import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
