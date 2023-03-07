import CartModal from "../modals/CartModal";
import {
  CartModalButton,
  CartModalElement,
  CartModalTitle,
  CartList,
  CartLabelContainer,
  CartItemListContainer,
  CartNameLabel,
  CartPriceLabel,
  CartQuantityLabel,
  CartTotalDetails,
  CartTotalDetailContainer,
  CartButtonContainer,
  CartItemTotalLabels,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import {
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../../store/slices/CartSlice";
import { useTranslation } from "react-i18next";
import useOrders from "./hooks/useOrders";

export const CartWindow = (props) => {
  const dispatch = useDispatch();
  const { createOrder } = useOrders();
  const { cart, totalAmount, totalPrice } = useSelector((state) => state.cart);
  const price = Math.round(totalPrice * 100) / 100;

  const { t } = useTranslation();

  return (
    <CartModal onClose={props.onClose}>
      <CartModalElement>
        <CartModalTitle>{t("CART")}</CartModalTitle>
      </CartModalElement>
      <CartLabelContainer>
        <CartNameLabel>{t("ITEM_NAME")}</CartNameLabel>
        <CartPriceLabel>{t("ITEM_PRICE")}</CartPriceLabel>
        <CartQuantityLabel>{t("ITEM_QUANTITY")}</CartQuantityLabel>
      </CartLabelContainer>
      <CartItemListContainer>
        <CartList>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              id={item.id}
              price={item.price}
              quantity={item.cartQuantity}
              onRemove={(quantity) => {
                dispatch(DECREMENT_QUANTITY({ id: item.id }));
              }}
              onAdd={() => {
                dispatch(INCREMENT_QUANTITY({ id: item.id }));
              }}
            />
          ))}
        </CartList>
      </CartItemListContainer>
      <CartTotalDetailContainer>
        <CartTotalDetails>
          <CartItemTotalLabels>
            {t("TOTAL_AMOUNT")} {totalAmount}
          </CartItemTotalLabels>
          <CartItemTotalLabels>
            {t("TOTAL_PRICE")} {price} $
          </CartItemTotalLabels>
        </CartTotalDetails>
      </CartTotalDetailContainer>
      <CartButtonContainer>
        <CartModalButton
          onClick={async (props) => {
            if (totalPrice > 0) {
              await createOrder();
            }
          }}
        >
          {t("PLACE_ORDER")}
        </CartModalButton>
        <CartModalButton onClick={props.onClose}>
          {t("EXIT_CART")}
        </CartModalButton>
      </CartButtonContainer>
    </CartModal>
  );
};
