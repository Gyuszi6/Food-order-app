import styled from "styled-components";

export const HomePageContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: ${({ theme }) => theme?.palette?.mainPageBackground};
`;
