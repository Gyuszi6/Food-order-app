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
import { useSelector, useDispatch } from "react-redux";
import { SET_LOGGED_IN } from "../../store/slices/AuthSlice";

const Header = (props) => {
  const nav = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <HeadContainer>
      <LogoContainer>
        <Logo>Food-Order-App</Logo>
      </LogoContainer>
      <MobileMenuButtons>
        {loggedIn && (
          <>
            <MobileCartButton onClick={props.onShowCart}>
              <BsCart4 />
            </MobileCartButton>

            <MobileLogoutButton
              onClick={() => {
                dispatch(SET_LOGGED_IN(!loggedIn));
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
            nav("/home");
          }}
        >
          {t("HEADER_MAINPAGE")}
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
              dispatch(SET_LOGGED_IN(!loggedIn));
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
