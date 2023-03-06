import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import {
  MobileAuthPanel,
  MobileAuthPanelButton,
  MobileAuthPanelHead,
  MobileAuthPanelLabel,
  MobileProfilePanelContent,
} from "./styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProfileForm from "../../components/profilePage/ProfileForm";

const ProfileBox = () => {
  const { t } = useTranslation();
  const [showInput, setShowInput] = useState(false);
  return (
    <MobileAuthPanel>
      <MobileAuthPanelHead>
        <MobileAuthPanelButton onClick={() => setShowInput(!showInput)}>
          {!showInput && <BiRightArrow />}
          {showInput && <BiDownArrow />}
        </MobileAuthPanelButton>
        <MobileAuthPanelLabel>{t("PROFILE")}</MobileAuthPanelLabel>
      </MobileAuthPanelHead>
      {showInput && (
        <MobileProfilePanelContent>
          <ProfileForm />
        </MobileProfilePanelContent>
      )}
    </MobileAuthPanel>
  );
};

export default ProfileBox;
