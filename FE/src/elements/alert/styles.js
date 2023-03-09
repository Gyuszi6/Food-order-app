import styled, { css } from "styled-components";

const SuccessAlert = css`
  background: green;
`;

const ErrorAlert = css`
  background: red;
`;

export const AlertBox = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  text-align: center;
  width: 400px;
  height: 30px;
  display: ${({ show }) => (show ? "block" : "none")};
  ${({ type }) => (type === "error" ? ErrorAlert : SuccessAlert)};
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    color: ${({ theme }) => theme?.palette?.authCardTextColour};
    width: 100%;
    right: 0;
    left: 0;
    font-size: 18px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    color: ${({ theme }) => theme?.palette?.authCardTextColour};
    width: 100%;
    right: 0;
    left: 0;
    font-size: 14px;
  }
`;
