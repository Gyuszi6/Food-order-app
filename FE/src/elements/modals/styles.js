import styled from "styled-components";

export const BackDropLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalOverlayLayout = styled.div`
  position: fixed;
  top: 12px;
  right: 20%;
  width: 90px;
  height: 90px;
  background-color: ${({ theme }) => theme?.palette?.modalBackground};
  padding: 20px;
  border-radius: 12px;
  z-index: 20;
  animation: slide-left 500ms;

  @keyframes slide-left {
    from {
      opacity: 0;
      transform: translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const CartModalOverlayLayout = styled.div`
  z-index: 20;
  position: fixed;
  border-radius: 12px;
  width: 60%;
  height: 700px;
  top: 50%;
  left: 50%;
  margin-left: -30%;
  margin-top: -350px;
  color: ${({ theme }) => theme?.palette?.cartTextColor};
  background-color: ${({ theme }) => theme?.palette?.cartBackground};
  display: block;
  animation: slide-up 1000ms;
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 100%;
    height: 600px;
    margin-left: -50%;
    margin-top: -300px;
  }
`;
