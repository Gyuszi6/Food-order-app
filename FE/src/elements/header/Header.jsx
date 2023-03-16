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
  Spinner,
} from "./stlyes";
import { BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SettingsForm from "./SettingsForm";
import { BsCart4 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "../../hooks/useAlert";
import useHeader from "./hooks/useHeader";
import useFoods from "../../products/hooks/useFoods";
import FoodForm from "../../products/FoodForm";
import { SET_CHANGE_FOOD_FORM } from "../../store/slices/FoodSlice";
import { RiMoneyPoundCircleFill } from "react-icons/ri";

const Header = (props) => {
  const dispatch = useDispatch();
  const { getFoods } = useFoods();
  const { logout } = useHeader();
  const { showErrorNotification } = useAlert();
  const nav = useNavigate();
  const { t } = useTranslation();
  const { loggedIn, isAdmin, isLoading } = useSelector((state) => state.auth);
  const { changeFoodForm, currentFoodId } = useSelector((state) => state.food);

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
        {isLoading && <Spinner />}
        {!isLoading && loggedIn && (
          <>
            {!isAdmin && (
              <MobileCartButton onClick={props.onShowCart}>
                <BsCart4 />
              </MobileCartButton>
            )}
            {isAdmin && (
              <MobileCartButton onClick={() => nav("/orders")}>
                <RiMoneyPoundCircleFill />
              </MobileCartButton>
            )}

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
        {isLoading && <Spinner />}
        {isAdmin && loggedIn && !isLoading && (
          <MenuButton
            onClick={() => {
              if (currentFoodId === 0) {
                nav("/home");
                dispatch(SET_CHANGE_FOOD_FORM(!changeFoodForm));
              }
            }}
          >
            {t("CREATE_FOOD")}
          </MenuButton>
        )}
        {changeFoodForm && <FoodForm />}
        {!isAdmin && loggedIn && !isLoading && (
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
        )}
        {!isAdmin && loggedIn && !isLoading && (
          <CartButton onClick={props.onShowCart}>
            <BsCart4></BsCart4>
            {t("CART")}
            <BsCart4></BsCart4>
          </CartButton>
        )}
        {loggedIn && isAdmin && !isLoading && (
          <CartButton
            onClick={() => {
              if (!changeFoodForm) {
                nav("/orders");
              }
            }}
          >
            {t("ORDERS")}
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
        {loggedIn && !isLoading && (
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
