import styled, { css } from "styled-components";

export const PanelContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme?.palette?.panelBackground};
  border-right: 2px black solid;
`;

export const ButtonContainer = styled.div`
  display: block;
  padding: 6px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    padding: 0 0 0 6px;
    margin-top: -14px;
  }
`;

const activeTypeButton = css`
  color: green;
  background: grey;
  cursor: default;
  justify-content: space-between;
`;

const inActiveTypeButton = css`
  color: black;
  background: white;
  justify-content: center;
  &:hover {
    background: yellow;
    transition: 2s;
  }
`;

export const TypeButton = styled.button`
  display: flex;
  margin: 10px auto 10px auto;
  width: 100%;
  cursor: pointer;
  ${({ activeButtonId, menuItemId }) =>
    activeButtonId === menuItemId ? activeTypeButton : inActiveTypeButton};

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 100px;
  }
`;

export const PriceFilterContainer = styled.div`
  display: block;
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PriceInputContainer = styled.div`
  display: block;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: block;
    margin-top: -16px;
    margin-left: 10px;
  }
`;

export const PriceFilterButton = styled.button`
  height: 30px;
  width: 100px;
  cursor: pointer;
  margin-right: 10px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 80px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 80px;
    font-size: 12px;
    margin-bottom: 8px;
    height: 20px;
  }
`;

export const PriceButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  margin-left: 10px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: 16px;
    width: 80%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 80px;
    margin-left: 12px;
    display: block;
    margin-top: 10px;
  }
`;

export const FoodFilterContainer = styled.div`
  display: block;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: flex;
    justify-content: space-between;
  }
`;
