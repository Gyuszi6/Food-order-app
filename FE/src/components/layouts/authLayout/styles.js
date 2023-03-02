import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
  }
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
`;

export const LayoutContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background: ${({ theme }) => theme?.palette?.loginPageBackground};
  display: flex;
  justify-content: center;
`;
