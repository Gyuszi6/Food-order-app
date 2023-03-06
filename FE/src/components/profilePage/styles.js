import styled from "styled-components";

export const ProfileContainer = styled.div`
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

export const ProfileTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  padding-top: 5px;
`;

export const MobileProfileContainer = styled.div`
  display: block;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: flex;
  }
`;

export const ProfileButton = styled.button`
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 8px 4px 8px;
  font-size: 16px;
  color: black;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-top: 10px;
  }
`;

export const ErrorContainer = styled.div`
  width: 220px;
  height: 160px;
  margin-top: 60px;
  margin-left: 140px;
  position: fixed;
  height: 20px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    font-size: 12px;
  }
`;
