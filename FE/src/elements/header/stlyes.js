import styled from "styled-components";

export const HeadContainer = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme?.palette?.headerBackground};
  display: flex;
  padding: 10px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0;
  border-bottom: 2px black solid;
`;

export const HeaderElementContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 2px 2px;
  justify-content: center;
  text-align: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 2px 2px;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-top: -10px;
    width: 120px;
    padding: 0;
    text-align: left;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 80px;
  }
`;

export const Logo = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme?.palette?.headerTextColor};
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-left: -10px;
    font-size: 16px;
    margin-top: -3px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    font-size: 16px;
    margin-left: -12px;
  }
`;

export const MenuButton = styled.button`
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
  color: ${({ theme }) => theme?.palette?.headerTextColor};
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const SettingsContainer = styled.div`
  height: 30px;
  margin-top: 4px;
  box-sizing: border-box;
  display: flex;
  width: 145px;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 22px;
  border-radius: 15px;
  background: #bebebe;
  margin-left: 5px;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-top: 3px;
    margin-left: 2px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBox = styled.input`
  width: 42px;
  &:checked + ${CheckBoxLabel} {
    background: #3d3094;
    &::after {
      content: "";
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 19px;
      transition: 0.2s;
    }
  }
`;

export const ThemeIconSun = styled.div`
  margin-top: 2.5px;
  color: #ffff97;
`;

export const ThemeIconMoon = styled.div`
  margin-top: 2.5px;
  color: yellow;
`;

export const LanguageButton = styled.div`
  border: 1px ${({ theme }) => theme?.palette?.headerTextColor} solid;
  padding: 5px 5px 0 5px;
  margin-top: -6px;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 0;
  display: flex;
  color: ${({ theme }) => theme?.palette?.headerTextColor};

  @media screen and (max-width: ${({ theme }) =>
    theme?.globals?.breakpoints?.sm}) {
    padding: 2px;
    margin: 0 auto 0 auto
    text-align: center;
    justify-content: center;
    color: ${({ theme }) => theme?.palette?.modalTextColor};
    border: 1px ${({ theme }) => theme?.palette?.modalTextColor} solid;
  }
`;

export const MobileMenuButtons = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: flex;
    box-sizing: border-box;
    margin: 0;
  }
`;

export const MobileSettingsContainer = styled.div`
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: block;
    box-sizing: border-box;
    margin: 0;
  }
`;

export const MobileSettingsButton = styled.button`
  position: fixed;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 40px;
  color: ${({ theme }) => theme?.palette?.headerTextColor};
`;

export const MobileLogoutButton = styled.button`
  position: fixed;
  margin-top: 2px;
  right: 70px;
  background-color: transparent;
  border: none;
  font-size: 35px;
  color: ${({ theme }) => theme?.palette?.headerTextColor};
`;

export const MobileSettings = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    justify-content: center;
    display: flex;
    margin-top: 12px;
    margin-right: 6px;
  }
`;

export const MobileSettingsWindowLayout = styled.div`
  display: block;
  background-color: transparent;
  box-sizing: border-box;
  width: 100px;
  height: 70px;
  margin-top: 0;
`;

export const MobileCartButton = styled.button`
  position: fixed;
  right: 115px;
  background-color: transparent;
  border: none;
  font-size: 35px;
  color: ${({ theme }) => theme?.palette?.headerTextColor};
  margin-top: 1px;
`;

export const CartButton = styled.button`
  display: flex;
  width: 120px;
  font-size: 16px;
  padding: 2px;
  margin-right: 10px;
  margin-left: 10px;
  justify-content: space-evenly;
  padding-top: 6px;
  font-weight: bold;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    width: 120px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;
