import {
  HeadContainer,
  HeaderElementContainer,
  Logo,
  MenuButton,
  SettingsContainer,
  MobileMenuButtons,
  MobileCartButton,
  MobileLogoutButton,
  MobileSettingsContainer,
  MobileSettingsButton,
  CartButton,
  LogoContainer,
} from "./stlyes";
import { BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SettingsForm from "./SettingsForm";
import { BsCart4 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useAlert } from "../../hooks/useAlert";
import useHeader from "./hooks/useHeader";
import useFoods from "../../products/hooks/useFoods";

const Header = (props) => {
  const { getFoods } = useFoods();
  const { logout } = useHeader();
  const { showErrorNotification } = useAlert();
  const nav = useNavigate();
  const { t } = useTranslation();
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <HeadContainer>
      <LogoContainer>
        <Logo
          onClick={() => {
            nav("/home");
            getFoods();
          }}
        >
          Food-Order-App
        </Logo>
      </LogoContainer>
      <MobileMenuButtons>
        {loggedIn && (
          <>
            <MobileCartButton onClick={props.onShowCart}>
              <BsCart4 />
            </MobileCartButton>

            <MobileLogoutButton
              onClick={() => {
                logout();
              }}
            >
              <BiLogOut />
            </MobileLogoutButton>
          </>
        )}

        <MobileSettingsContainer>
          <MobileSettingsButton onClick={props.onShowSettings}>
            <BiMenu />
          </MobileSettingsButton>
        </MobileSettingsContainer>
      </MobileMenuButtons>
      <HeaderElementContainer>
        <MenuButton
          onClick={() => {
            if (loggedIn) {
              nav("/profile");
            } else {
              showErrorNotification(t("CART_ERROR"));
            }
          }}
        >
          {t("PROFILE")}
        </MenuButton>
        {loggedIn && (
          <CartButton onClick={props.onShowCart}>
            <BsCart4></BsCart4>
            {t("CART")}
            <BsCart4></BsCart4>
          </CartButton>
        )}
        {!loggedIn && (
          <MenuButton
            onClick={() => {
              nav("/registration");
            }}
          >
            {t("HEADER_REGISTRATION")}
          </MenuButton>
        )}
        {!loggedIn && (
          <MenuButton
            onClick={() => {
              nav("/login");
            }}
          >
            {t("HEADER_LOGIN")}
          </MenuButton>
        )}
        {loggedIn && (
          <MenuButton
            onClick={() => {
              logout();
            }}
          >
            {t("LOG_OUT")}
          </MenuButton>
        )}
      </HeaderElementContainer>

      <HeaderElementContainer>
        <SettingsContainer>
          <SettingsForm />
        </SettingsContainer>
      </HeaderElementContainer>
    </HeadContainer>
  );
};

export default Header;
