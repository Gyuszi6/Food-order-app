import SidePanel from "../../../elements/sidePanel/SidePanel";
import Header from "../../../elements/header/Header";
import {
  LayoutContainer,
  HeaderContainer,
  SidePanelContainer,
  ContentContainer,
  BottomContainer,
} from "./styles";
import MobileSettingsWindow from "../../../elements/mobile/MobileSettingsWindow";
import { CartWindow } from "../../../elements/cart/CartWindow";
import { useState } from "react";
import Alert from "../../../elements/alert/Alert";

const MainLayout = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <LayoutContainer>
      {showSettings && (
        <MobileSettingsWindow onClose={() => setShowSettings(false)} />
      )}
      {showCart && <CartWindow onClose={() => setShowCart(false)}></CartWindow>}
      <HeaderContainer>
        <Header
          onShowSettings={() => setShowSettings(true)}
          onShowCart={() => setShowCart(true)}
        />
        <Alert />
      </HeaderContainer>
      <BottomContainer>
        <SidePanelContainer>
          <SidePanel />
        </SidePanelContainer>
        <ContentContainer>{children}</ContentContainer>
      </BottomContainer>
    </LayoutContainer>
  );
};

export default MainLayout;
