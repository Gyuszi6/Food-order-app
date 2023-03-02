import Header from "../../../elements/header/Header";
import { LayoutContainer, HeaderContainer, ContentContainer } from "./styles";
import MobileSettingsWindow from "../../../elements/mobile/MobileSettingsWindow";
import { CartWindow } from "../../../elements/cart/CartWindow";
import Alert from "../../../elements/alert/Alert";
import { useState } from "react";

const AuthLayout = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <LayoutContainer>
      {showSettings && (
        <MobileSettingsWindow onClose={() => setShowSettings(false)} />
      )}
      {showCart && <CartWindow onClose={() => setShowCart(false)}></CartWindow>}
      <Alert />
      <HeaderContainer>
        <Header
          onShowSettings={() => setShowSettings(true)}
          onShowCart={() => setShowCart(true)}
        />
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default AuthLayout;
