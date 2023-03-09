import styled from "styled-components";

export const RegistrationContainer = styled.div`
  height: 400px;
  width: 500px;
  background-color: ${({ theme }) =>
    theme?.palette?.registrationContainerBackground};
  margin: 160px auto 0;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  display: block;
  color: ${({ theme }) => theme?.palette?.authTextColor};
`;

export const RegistrationTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  padding-top: 10px;
`;

export const RegistrationButton = styled.button`
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 8px 4px 8px;
  font-size: 16px;
  color: black;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-top: 37px;
  }
`;

export const ErrorContainer = styled.div`
  height: 70px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    height: 40px;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    font-size: 10.5px;
  }
`;
