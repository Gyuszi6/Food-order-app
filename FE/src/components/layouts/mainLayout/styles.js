import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 10;
`;

export const SidePanelContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-left: 200px;
  background: grey;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LayoutContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme?.palette?.mainPageBackground};
`;

export const BottomContainer = styled.div`
  box-sizing: border-box;
  margin-top: 60px;
  display: flex;
`;
