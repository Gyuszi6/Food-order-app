import AuthLayout from "../layouts/authLayout/AuthLayout";
import { LoginContainer, LoginTitle } from "./styles";
import { useTranslation } from "react-i18next";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <LoginContainer>
        <LoginTitle>{t("LOGIN_TITLE")}</LoginTitle>
        <LoginForm />
      </LoginContainer>
    </AuthLayout>
  );
};

export default LoginPage;
