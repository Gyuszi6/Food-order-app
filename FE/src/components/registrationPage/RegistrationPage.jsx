import AuthLayout from "../layouts/authLayout/AuthLayout";
import { RegistrationTitle, RegistrationContainer } from "./styles";
import { useTranslation } from "react-i18next";
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <RegistrationContainer>
        <RegistrationTitle>{t("REGISTRATION_TITLE")}</RegistrationTitle>
        <RegistrationForm />
      </RegistrationContainer>
    </AuthLayout>
  );
};

export default RegistrationPage;
