import styled from "styled-components";

export const Content = styled.div`
  background: white;
  margin-top: 100px;
  margin-left: 0;
  width: 100vh;
  height: 80%;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    width: 80vh;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    width: 60vh;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
  }
`;

export const OrderLabelBox = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 3px black solid;
  width: 100%;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    width: 80vh;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    width: 60vh;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const DateLabelcontainer = styled.div`
  box-sizing: border-box;
  margin-right: 0;
  margin-left: 10px;
  width: 24%;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    margin-left: 10px;
    margin-right: 0;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-left: 0;
    margin-right: 55px;
  }
`;
export const NameLabelcontainer = styled.div`
  box-sizing: border-box;
  margin-left: -45px;
  margin-right: 20px;
  width: 20%;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    margin-left: -65px;
    margin-right: 10px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-right: 0;
  }
`;
export const AddressLabelcontainer = styled.div`
  box-sizing: border-box;
  margin-right: 15px;
  width: 24%;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    margin-right: -3px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-right: 11px;
  }
`;
export const PriceLabelcontainer = styled.div`
  width: 8%;
  box-sizing: border-box;
`;

export const OrderElements = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    padding-top: 10px;
  }
`;

export const OrderItem = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 20px;
`;

export const DateContainer = styled.div`
  width: 30%;
  margin-right: 50px;
  text-align: center;
  margin-left: 0;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    margin-right: 45px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-right: 25px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-right: 30px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    margin-right: 20px;
    margin-left: -10px;
  }
`;

export const NameContainer = styled.div`
  width: 25%;
  margin-right: 70px;
  padding-right: auto;
  padding-left: auto;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-right: 15px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-right: 20px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    margin-right: 0;
  }
`;

export const AddressContainer = styled.div`
  width: 30%;
  margin-left: 0;
  margin-right: 100px;
  padding-left: 20px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-right: 50px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const PriceContainer = styled.div`
  width: 10%;
  margin-right: 100px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-right: 30px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const ShowItemsButton = styled.button`
  background: grey;
  margin-top: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 60px;
  font-size: 20px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    margin-right: 20px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: none;
  }
`;

export const ShowItemsButtonMobile = styled.button`
  display: none;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: flex;
    background: grey;
    margin-top: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 40px;
    font-size: 20px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    margin-right: 16px;
  }
`;

export const FinishedOrderButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: green;
  color: white;
  font-size: 18px;
`;
export const ItemListConatiner = styled.div`
  position: fixed;
  top: 120px;
  right: 50%;
  left: 40%;
  padding: 5px 10px 5px 10px;
  border: 1px black solid;
  z-index: 30;
  background: red;
  font-weight: bold;
  width: 300px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    left: 35%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    left: 30%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    left: 21%;
    text-align: left;
    width: 250px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    left: 15%;
    width: 200px;
  }
`;

export const ExitItemListButton = styled.button`
  margin-left: 280px;
  margin-top: 0;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: 230px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    margin-left: 180px;
  }
`;

export const TextOnMobile = styled.p`
  display: none;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: flex;
  }
`;
