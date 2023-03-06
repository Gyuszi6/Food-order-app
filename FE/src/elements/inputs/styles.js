import styled from "styled-components";

export const InputBox = styled.div`
  justify-content: space-between;
  display: flex;
  width: 300px;
  height: 24px;
  margin: 0 auto 14px;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    height: 20px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 220px;
  }
`;

export const Label = styled.p`
  margin: 0;
  color: ${({ theme }) => theme?.palette?.filterTextColor};
`;

export const EmailInputField = styled.input`
  box-sizing: border-box;
  width: 160px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 100px;
  }
`;

export const ProfileInputField = styled.input`
  box-sizing: border-box;
  width: 160px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 100px;
  }
`;

export const PasswordInputField = styled.input`
  box-sizing: border-box;
  position: relative;
  padding-right: 18px;
  width: 160px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 100px;
  }
`;

export const ShowPasswordButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 10px;
  top: 4px;
`;
export const PriceInputBox = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100px;
  height: 20px;
  margin: 0 auto 14px;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    height: 20px;
    margin-left: 10px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 80px;
    margin-left: 5px;
  }
`;

export const PriceInputField = styled.input`
  box-sizing: border-box;
  width: 50px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 30px;
  }
`;
