import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 300px;
  width: 500px;
  background-color: ${({ theme }) => theme?.palette?.loginContainerBackground};
  margin: 160px auto 0;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  display: block;
  color: ${({ theme }) => theme?.palette?.authTextColor};
`;

export const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  padding-top: 10px;
`;

export const LoginButton = styled.button`
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  margin-top: 42px;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 8px 4px 8px;
  font-size: 16px;
  color: black;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-top: 31px;
  }
`;

export const ErrorContainer = styled.div`
  height: 20px;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;

  @media screen and (max-width: ${({ theme }) =>
    theme?.globals?.breakpoints?.sm}) {
    font-size: 12px;
    margin-bottom: 0;
`;
