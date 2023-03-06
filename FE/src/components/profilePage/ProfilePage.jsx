import AuthLayout from "../layouts/authLayout/AuthLayout";
import { ProfileContainer, ProfileTitle } from "./styles";
import { useTranslation } from "react-i18next";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <ProfileContainer>
        <ProfileTitle>{t("PROFILE")}</ProfileTitle>
        <ProfileForm />
      </ProfileContainer>
    </AuthLayout>
  );
};

export default ProfilePage;
