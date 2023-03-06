import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import EmailInput from "../../elements/inputs/EmailInput";
import PasswordInput from "../../elements/inputs/PasswordInput";
import { useTranslation } from "react-i18next";
import { ErrorContainer, ErrorMessage, LoginButton } from "./styles";
import useLogin from "./hooks/useLogin";

const LoginForm = () => {
  const { login } = useLogin();
  const { t } = useTranslation();
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required(`${t("MISSING_EMAIL")}`)
      .trim()
      .email(`${t("WRONG_EMAIL")}`),
    password: yup
      .string()
      .required(`${t("MISSING_PASSWORD")}`)
      .trim()
      .matches(/^[A-Za-z0-9]{6,16}$/i, `${t("WRONG_PASSWORD")}`),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnMount={true}
      enableReinitialize={true}
      validationSchema={loginSchema}
      onSubmit={async (email, password) => {
        await login(email, password);
      }}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form>
          <Field
            as={EmailInput}
            name="email"
            touched={touched["email"]}
            errors={errors["email"]}
            label={t("EMAIL_LABEL")}
            setFieldValue={setFieldValue}
          />
          <Field
            as={PasswordInput}
            name="password"
            touched={touched["password"]}
            errors={errors["password"]}
            label={t("PASSWORD_LABEL")}
            setFieldValue={setFieldValue}
          />
          <ErrorContainer>
            {Object.entries(errors).map(
              ([name, errorKey]) =>
                touched[name] && (
                  <ErrorMessage key={name}>{errorKey}</ErrorMessage>
                )
            )}
          </ErrorContainer>
          <LoginButton type="submit">{t("LOGIN_TITLE")}</LoginButton>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
