import React from "react";
import { BackDropLayout, ModalOverlayLayout } from "./styles";
import { Portal } from "./Portal";

const BackDrop = (props) => {
  return <BackDropLayout onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalOverlayLayout>
      <>{props.children}</>
    </ModalOverlayLayout>
  );
};

const SettingsModal = (props) => {
  return (
    <Portal>
      <>
        <BackDrop onClose={props.onClose} />
        <ModalOverlay>{props.children}</ModalOverlay>
      </>
    </Portal>
  );
};

export default SettingsModal;
