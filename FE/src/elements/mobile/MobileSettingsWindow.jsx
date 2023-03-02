import { MobileSettingsWindowLayout } from "../header/stlyes";
import ThemingForm from "../header/SettingsForm";
import SettingsModal from "../modals/SettingsModal";
import { CloseMobileSettingsModalButton } from "./styles";
import { useTranslation } from "react-i18next";

const MobileSettingsWindow = (props) => {
  const { t } = useTranslation();
  return (
    <SettingsModal onClose={props.onClose}>
      <MobileSettingsWindowLayout>
        <ThemingForm />
        <CloseMobileSettingsModalButton onClick={props.onClose}>
          {t("CLOSE_MODAL")}
        </CloseMobileSettingsModalButton>
      </MobileSettingsWindowLayout>
    </SettingsModal>
  );
};

export default MobileSettingsWindow;
