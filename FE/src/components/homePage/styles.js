import styled from "styled-components";

export const HomePageContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: ${({ theme }) => theme?.palette?.mainPageBackground};
`;

export const Spinner = styled.div`
  border-top: 3px solid ${({ theme }) => theme?.palette?.spinner};
  border-right: 3px solid ${({ theme }) => theme?.palette?.spinner};
  border-bottom: 3px solid ${({ theme }) => theme?.palette?.spinner};
  border-left: 5px solid black;
  background: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;

  animation: rotate 1s linear infinite;
  transform: translateZ(0);

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
