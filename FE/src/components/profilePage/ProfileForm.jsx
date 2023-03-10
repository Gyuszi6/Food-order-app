import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import ProfileInput from "../../elements/inputs/ProfileInput";
import useProfile from "./hooks/useProfile";
import {
  ProfileButton,
  ErrorContainer,
  ErrorMessage,
  MobileProfileContainer,
  MobileErrorMessage,
} from "./styles";
import { useAlert } from "../../hooks/useAlert";
import { useSelector } from "react-redux";
import useLogin from "../loginPage/hooks/useLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const nav = useNavigate();
  const { t } = useTranslation();
  const { changeProfile } = useProfile();
  const { showSuccessNotification } = useAlert();
  const { name, postalCode, city, address } = useSelector(
    (state) => state.auth
  );
  const { getCurrentUserData } = useLogin();

  useEffect(() => {
    getCurrentUserData();
  }, [getCurrentUserData]);

  const profileSchema = yup.object().shape({
    name: yup
      .string()
      .required(`${t("NAME_ERROR")}`)
      .trim()
      .matches(/^[A-Za-z_ ]{2,30}$/i, `${t("NAME_ERROR")}`),
    postalCode: yup
      .string()
      .required(`${t("POSTAL_CODE_ERROR")}`)
      .trim()
      .matches(/^[0-9]{4}$/i, `${t("POSTAL_CODE_ERROR")}`),
    city: yup
      .string()
      .required(`${t("CITY_ERROR")}`)
      .trim()
      .matches(/^[A-Za-z_ ]{2,30}$/i, `${t("CITY_ERROR")}`),
    address: yup
      .string()
      .required(`${t("ADDRESS_ERROR")}`)
      .trim()
      .matches(/^[A-Za-z0-9_ ]{2,30}$/i, `${t("ADDRESS_ERROR")}`),
  });

  return (
    <Formik
      initialValues={{
        name: name,
        postalCode: postalCode,
        city: city,
        address: address,
      }}
      validateOnMount={true}
      enableReinitialize={true}
      validationSchema={profileSchema}
      onSubmit={async (name, postalCode, city, address) => {
        await changeProfile(name, postalCode, city, address);
        showSuccessNotification(t("PROFILE_CHANGE_SUCCESS"));
        nav("/home");
      }}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form>
          <MobileProfileContainer>
            <div>
              <Field
                as={ProfileInput}
                name="name"
                touched={touched["name"]}
                errors={errors["name"]}
                label={t("NAME")}
                setFieldValue={setFieldValue}
              />
              <Field
                as={ProfileInput}
                name="postalCode"
                touched={touched["postalCode"]}
                errors={errors["postalCode"]}
                label={t("POSTAL_CODE")}
                setFieldValue={setFieldValue}
              />
              <Field
                as={ProfileInput}
                name="city"
                touched={touched["city"]}
                errors={errors["city"]}
                label={t("CITY")}
                setFieldValue={setFieldValue}
              />
              <Field
                as={ProfileInput}
                name="address"
                touched={touched["address"]}
                errors={errors["address"]}
                label={t("ADDRESS")}
                setFieldValue={setFieldValue}
              />
            </div>

            <ErrorContainer>
              {Object.entries(errors).length > 0 && (
                <MobileErrorMessage>
                  {t("MOBILE_PROFILE_ERROR")}
                </MobileErrorMessage>
              )}
              {Object.entries(errors).map(
                ([name, errorKey]) =>
                  touched[name] && (
                    <ErrorMessage key={name}>{errorKey}</ErrorMessage>
                  )
              )}
            </ErrorContainer>
          </MobileProfileContainer>
          <ProfileButton type="submit">{t("SAVE")}</ProfileButton>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
