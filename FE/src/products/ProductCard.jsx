import {
  ProductCardButtonContainer,
  ProductCardButton,
  ProductCardField,
  ProductDetails,
  ProductCardImageContainer,
  ProductImg,
  ProductName,
  ProductCardTextContainer,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useAlert } from "../hooks/useAlert";
import { useSelector, useDispatch } from "react-redux";
import { SET_CART } from "../store/slices/CartSlice";

const ProductCard = ({ name, id, price, img }) => {
  const { showErrorNotification, showSuccessNotification } = useAlert();
  const { loggedIn } = useSelector((state) => state.auth);
  let { cart } = useSelector((state) => state.cart);

  const { t } = useTranslation();
  const dispatch = useDispatch();

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
      <ProductCardTextContainer>
        <ProductName>{name}</ProductName>
        <ProductDetails>{price} $</ProductDetails>
      </ProductCardTextContainer>
      <ProductCardButtonContainer>
        <ProductCardButton
          onClick={() => {
            loggedIn
              ? showSuccessNotification(t("CART_SUCCESS"))
              : showErrorNotification(t("CART_ERROR"));
            if (loggedIn) {
              dispatch(SET_CART(ItemData));
              console.log(cart);
            }
          }}
        >
          {t("ADD_TO_CART")}
        </ProductCardButton>
        <ProductCardButton>{t("DETAILS")}</ProductCardButton>
      </ProductCardButtonContainer>
    </ProductCardField>
  );
};

export default ProductCard;
