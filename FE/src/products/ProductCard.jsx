import {
  ProductCardButtonContainer,
  ProductCardButton,
  ProductCardField,
  ProductDetailsContainer,
  ProductDetails,
  ProductCardImageContainer,
  ProductImg,
  ProductName,
  ProductCardTextContainer,
  DeleteButtonContainer,
  DeleteButton,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useAlert } from "../hooks/useAlert";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_CURRENT_FOOD_ID,
  SET_CURRENT_DESCRIPTION,
  SET_CURRENT_IMAGE,
  SET_CURRENT_NAME,
  SET_CURRENT_PRICE,
  SET_CURRENT_TYPE,
  SET_CHANGE_FOOD_FORM,
} from "../store/slices/FoodSlice";
import { SET_CART } from "../store/slices/CartSlice";
import { useState } from "react";
import useFoods from "./hooks/useFoods";
import FoodForm from "./FoodForm";

const ProductCard = ({ name, id, price, img, description, foodtype }) => {
  const { deleteFood, getFoods } = useFoods();
  const { showErrorNotification, showSuccessNotification } = useAlert();
  const { loggedIn, isAdmin } = useSelector((state) => state.auth);
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currentFoodId, changeFoodForm } = useSelector((state) => state.food);

  const ItemData = {
    id: id,
    name: name,
    price: price,
  };

  return (
    <ProductCardField key={id}>
      <ProductCardImageContainer>
        <ProductImg src={img} alt="" />
      </ProductCardImageContainer>
      {isAdmin && (
        <DeleteButtonContainer>
          <DeleteButton
            onClick={async () => {
              await deleteFood(id);
              await getFoods();
            }}
          >
            X
          </DeleteButton>
        </DeleteButtonContainer>
      )}
      <ProductCardTextContainer>
        <ProductName>{name}</ProductName>
        <ProductDetails>{price} $</ProductDetails>
      </ProductCardTextContainer>
      <ProductCardButtonContainer>
        {!isAdmin && (
          <ProductCardButton
            onClick={() => {
              loggedIn
                ? showSuccessNotification(t("CART_SUCCESS"))
                : showErrorNotification(t("CART_ERROR"));
              if (loggedIn) {
                dispatch(SET_CART(ItemData));
              }
            }}
          >
            {t("ADD_TO_CART")}
          </ProductCardButton>
        )}
        {isAdmin && (
          <ProductCardButton
            onClick={() => {
              if (currentFoodId === 0 && !changeFoodForm) {
                dispatch(SET_CURRENT_FOOD_ID(id));
                dispatch(SET_CURRENT_DESCRIPTION(description));
                dispatch(SET_CURRENT_IMAGE(img));
                dispatch(SET_CURRENT_NAME(name));
                dispatch(SET_CURRENT_TYPE(foodtype));
                dispatch(SET_CURRENT_PRICE(price));
                dispatch(SET_CHANGE_FOOD_FORM(!changeFoodForm));
              } else {
                return;
              }
            }}
          >
            {t("MODIFIE")}
          </ProductCardButton>
        )}
        <ProductCardButton
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          {t("DETAILS")}
        </ProductCardButton>
      </ProductCardButtonContainer>
      {changeFoodForm && <FoodForm />}
      <ProductDetailsContainer>
        {showDetails &&
          (description.length < 70 ? (
            <ProductDetails>{description}</ProductDetails>
          ) : (
            <ProductDetails>{description.slice(0, 70)}...</ProductDetails>
          ))}
      </ProductDetailsContainer>
    </ProductCardField>
  );
};

export default ProductCard;
