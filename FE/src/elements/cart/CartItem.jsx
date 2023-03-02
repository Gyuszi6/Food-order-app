import {
  CartItemDetailContainer,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  CartItemIncrement,
  CartItemDecrement,
  CartListItem,
  CartAmountButton,
} from "./styles";

const CartItem = (props) => {
  return (
    <CartListItem>
      <CartItemDetailContainer>
        <CartItemName>{props.name}</CartItemName>
        <CartItemPrice>{props.price} $</CartItemPrice>
        <CartItemQuantity>{props.quantity}</CartItemQuantity>
        <CartItemIncrement>
          <CartAmountButton onClick={props.onAdd}>+</CartAmountButton>
        </CartItemIncrement>
        <CartItemDecrement>
          <CartAmountButton onClick={props.onRemove}>-</CartAmountButton>
        </CartItemDecrement>
      </CartItemDetailContainer>
    </CartListItem>
  );
};

export default CartItem;
