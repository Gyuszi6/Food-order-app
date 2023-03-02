import styled from "styled-components";

export const ProductsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const ProductCardField = styled.div`
  box-sizing: border-box;
  border: 1px black solid;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 250px;
  height: 350px;
  background: ${({ theme }) => theme?.palette?.productCardBackground};
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    height: 350px;
  }
`;

export const ProductCardImageContainer = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 150px;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 250px;
    height: 150px;
    margin: auto;
  }
`;

export const ProductCardTextContainer = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 250px;
  height: 100px;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin: auto;
  }
`;

export const ProductCardButtonContainer = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin: auto;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductName = styled.h2``;

export const ProductDetails = styled.p``;

export const ProductCardButton = styled.button`
  width: 35%;
  height: 40%;
`;
