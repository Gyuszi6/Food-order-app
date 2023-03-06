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
} from "./styles";
import { useAlert } from "../../hooks/useAlert";

const ProfileForm = () => {
  const { t } = useTranslation();
  const { changeProfile } = useProfile();
  const { showSuccessNotification } = useAlert();

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
        name: "",
        postalCode: "",
        city: "",
        address: "",
      }}
      validateOnMount={true}
      enableReinitialize={true}
      validationSchema={profileSchema}
      onSubmit={async (name, postalCode, city, address) => {
        await changeProfile(name, postalCode, city, address);
        showSuccessNotification(t("PROFILE_CHANGE_SUCCESS"));
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
