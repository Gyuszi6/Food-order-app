import { ApiInstance } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../../hooks/useAlert";
import { useTranslation } from "react-i18next";

const useRegister = () => {
  const nav = useNavigate();
  const { t } = useTranslation();
  const { showSuccessNotification, showErrorNotification } = useAlert();

  const register = async ({ email, password, rePassword }) => {
    try {
      if (password === rePassword) {
        await ApiInstance.post("users/signup", {
          email: email,
          password: password,
        });
        showSuccessNotification(t("REGISTRATION_SUCCESS"));
        nav("/home");
      } else {
        showErrorNotification(t("PASSWORDS_DO_NOT_MACH"));
      }
    } catch (error) {
      if (error.response.data.message === "email in use") {
        showErrorNotification(t("EMAIL_IN_USE"));
      }
    }
  };

  return { register };
};

export default useRegister;
