import styled from "styled-components";

export const CartModalTitle = styled.h1`
  margin-bottom: 30px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-bottom: 10px;
  }
`;

export const CartModalElement = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const CartAmountButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme?.palette?.cartTextColor};
  border: none;
  font-size: 20px;
`;

export const CartListItem = styled.div`
  margin-bottom: 10px;
  padding-top: 5px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: -30px;
    margin-right: 10px;
  }
`;

export const CartItemName = styled.div`
  width: 30%;
  padding-top: 5px;
  margin-left: 2px;
  font-weight: bold;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    width: 46%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 50%;
  }
`;
export const CartItemPrice = styled.div`
  width: 20%;
  padding-top: 5px;
  font-weight: bold;
`;
export const CartItemQuantity = styled.div`
  width: 30%;
  padding-top: 5px;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 20%;
  }
`;
export const CartItemIncrement = styled.div`
  width: 10%;
  padding-top: 5px;
  font-weight: bold;
`;
export const CartItemDecrement = styled.div`
  width: 10%;
  padding-top: 5px;
  font-weight: bold;
`;

export const CartLabelContainer = styled.div`
  width: 72%;
  display: flex;
  margin-left: 40px;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: 10px;
  }
`;

export const CartNameLabel = styled.div`
  width: 30%;
  margin-left: 3px;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    width: 60%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 50%;
  }
`;
export const CartPriceLabel = styled.div`
  width: 18%;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.md}) {
    width: 18%;
    margin-left: -12px;
    margin-right: 13px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 12%;
    margin-left: 1px;
  }
`;
export const CartQuantityLabel = styled.div`
  width: 38%;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 22%;
    margin-right: 4px;
  }
`;

export const CartItemDetailContainer = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 3px white solid;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    height: 60px;
    width: 90%;
  }
`;

export const CartItemListContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CartTotalDetails = styled.div`
  display: flex;
  width: 25%;
  border: 4px white solid;
  border-top: none;
  justify-content: space-between;
  padding-right: 12px;
  padding-left: 12px;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    font-size: 15px;
    width: 40%;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    border-right: none;
    width: 50%;
    font-size: 14px;
    display: block;
  }
`;

export const CartTotalDetailContainer = styled.div`
  justify-content: right;
  display: flex;
  margin-top: -16px;
`;

export const CartButtonContainer = styled.div`
  display: block;
  width: 100%;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: flex;
    justify-content: start;
  }
`;

export const CartModalButton = styled.button`
  display: flex;
  width: 130px;
  height: 30px;
  padding-top: 6px;
  margin: 20px auto 30px auto;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
`;

export const CartItemTotalLabels = styled.p`
  font-size: 14px;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.cd}) {
    font-size: 12px;
  }
`;

export const CartItemDetails = styled.div``;

export const CartList = styled.ul`
  overflow-y: scroll;
  width: 100%;
  height: 300px;
  padding-top: 10px;
  border-bottom: 3px white solid;
  border-top: 3px white solid;
`;
