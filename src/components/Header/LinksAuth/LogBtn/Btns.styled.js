import styled from "styled-components";

export const Btn = styled.button`
  background: transparent;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1em;
  cursor: pointer;
  padding: ${({ padding }) => padding || "13px 28px"};
  color: ${({ color }) => color || "#f1f1f1"};
  border: ${({ border }) => border || "none"};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};

  @media only screen and (min-width: 768px) {
    padding: ${({ paddingMd }) => paddingMd || "15px 32px"};
  }
`;
