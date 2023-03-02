import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import EmailInput from "../../elements/inputs/EmailInput";
import PasswordInput from "../../elements/inputs/PasswordInput";
import { useTranslation } from "react-i18next";
import { RegistrationButton, ErrorContainer, ErrorMessage } from "./styles";

const RegistrationForm = () => {
  const { t } = useTranslation();
  const registrationSchema = yup.object().shape({
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
    rePassword: yup
      .string()
      .required(`${t("MISSING_PASSWORD_AGAIN")}`)
      .trim()
      .matches(/^[A-Za-z0-9]{6,16}$/i, `${t("WRONG_PASSWORD_AGAIN")}`),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rePassword: "",
      }}
      validateOnMount={true}
      enableReinitialize={true}
      validationSchema={registrationSchema}
      onSubmit={({ email, password, rePassword }) =>
        console.log("Registration")
      }
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
          <Field
            as={PasswordInput}
            name="rePassword"
            touched={touched["rePassword"]}
            errors={errors["rePassword"]}
            label={t("PASSWORD_AGAIN_LABEL")}
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
          <RegistrationButton type="submit">
            {t("REGISTRATION_TITLE")}
          </RegistrationButton>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
