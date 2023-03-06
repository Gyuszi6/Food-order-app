import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import {
  MobileAuthPanel,
  MobileAuthPanelButton,
  MobileLoginPanelContent,
  MobileAuthPanelHead,
  MobileAuthPanelLabel,
} from "./styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LoginForm from "../../components/loginPage/LoginForm";

const LoginBox = () => {
  const { t } = useTranslation();
  const [showInput, setShowInput] = useState(false);
  return (
    <MobileAuthPanel>
      <MobileAuthPanelHead>
        <MobileAuthPanelButton
          onClick={() => {
            setShowInput(!showInput);
          }}
        >
          {!showInput && <BiRightArrow />}
          {showInput && <BiDownArrow />}
        </MobileAuthPanelButton>
        <MobileAuthPanelLabel>{t("LOGIN_TITLE")}</MobileAuthPanelLabel>
      </MobileAuthPanelHead>
      {showInput && (
        <MobileLoginPanelContent>
          <LoginForm />
        </MobileLoginPanelContent>
      )}
    </MobileAuthPanel>
  );
};

export default LoginBox;
