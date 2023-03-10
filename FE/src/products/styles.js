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
  height: 370px;
  background: ${({ theme }) => theme?.palette?.productCardBackground};
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    height: 350px;
    padding-top: 10px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 350px;
    padding-top: 10px;
  }
`;

export const ProductCardImageContainer = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 130px;
  padding-right: 20px;
  padding-left: 20px;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 250px;
    height: 130px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

export const ProductCardTextContainer = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 250px;
  height: 90px;
  margin-top: -25px;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
    height: 90px;
  }
`;

export const ProductCardButtonContainer = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0;
  margin-top: 20px;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: 80px;
    margin-bottom: 30px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductName = styled.h2``;

export const ProductDetailsContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -75px;
`;

export const ProductDetails = styled.p`
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-top: 10px;
  }
`;

export const ProductCardButton = styled.button`
  width: 35%;
  height: 40%;
`;

export const DeleteButtonContainer = styled.div`
  border-radius: 16px;
  width: 32px;
  height: 32px;
  background: red;
  position: relative;
  margin-left: 213px;
  top: -120px;
  padding-left: auto;
  padding-right: auto;
  display: flex;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 40px;
    height: 40px;
    margin-left: 270px;
    border-radius: 20px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.xs}) {
    width: 40px;
    height: 40px;
    margin-left: 200px;
    border-radius: 20px;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const FoodFormContainer = styled.div`
  position: fixed;
  width: 90%;
  height: 250px;
  top: 100px;
  left: 200px;
  z-index: 20;
  background: red;
  display: flex;
  padding-top: 50px;
  margin: 0 auto 100px auto;
  border: 2px black solid;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    width: 100%;
    height: 200px;
    left: 0;
    top: 150px;
  }
`;

export const FoodFormButton = styled.button`
  cursor: pointer;
  margin-left: 65px;
  margin-top: 15px;
  width: 160px;
  height: 30px;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    margin-top: 0;
    width: 80px;
    height: 20px;
  }
`;

export const ExitFoodFormButton = styled.button`
  display: flex;
  position: fixed;
  z-index: 30;
  top: 102px;
  right: 0;
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: flex;
    position: fixed;
    z-index: 30;
    top: 152px;
    right: 0;
  }
`;
