import React from "react";
import { BackDropLayout, CartModalOverlayLayout } from "./styles";
import { Portal } from "./Portal";

const BackDrop = (props) => {
  return <BackDropLayout onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <CartModalOverlayLayout>
      <>{props.children}</>
    </CartModalOverlayLayout>
  );
};

const CartModal = (props) => {
  return (
    <Portal>
      <>
        <BackDrop onClose={props.onClose} />
        <ModalOverlay>{props.children}</ModalOverlay>
      </>
    </Portal>
  );
};

export default CartModal;
