import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import {
  MobileAuthPanel,
  MobileAuthPanelButton,
  MobileRegistrationPanelContent,
  MobileAuthPanelHead,
  MobileAuthPanelLabel,
} from "./styles";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import RegistrationForm from "../../components/registrationPage/RegistrationForm";

const RegistrationBox = () => {
  const { t } = useTranslation();
  const [showInput, setShowInput] = useState(false);
  return (
    <MobileAuthPanel>
      <MobileAuthPanelHead>
        <MobileAuthPanelButton onClick={() => setShowInput(!showInput)}>
          {!showInput && <BiRightArrow />}
          {showInput && <BiDownArrow />}
        </MobileAuthPanelButton>
        <MobileAuthPanelLabel>{t("REGISTRATION_TITLE")}</MobileAuthPanelLabel>
      </MobileAuthPanelHead>
      {showInput && (
        <MobileRegistrationPanelContent>
          <RegistrationForm />
        </MobileRegistrationPanelContent>
      )}
    </MobileAuthPanel>
  );
};

export default RegistrationBox;
