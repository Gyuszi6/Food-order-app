import FilterBox from "../../elements/mobile/FilterBox";
import LoginBox from "../../elements/mobile/LoginBox";
import ProfileBox from "../../elements/mobile/ProfileBox";
import RegistrationBox from "../../elements/mobile/RegistrationBox";
import Products from "../../products/Products";
import MainLayout from "../layouts/mainLayout/MainLayout";
import { HomePageContainer } from "./styles";
import { useSelector } from "react-redux";
import useLogin from "../loginPage/hooks/useLogin";

const HomePage = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  const { getCurrentUserData } = useLogin();

  getCurrentUserData();

  return (
    <MainLayout>
      <HomePageContainer>
        {!loggedIn && <LoginBox />}
        {!loggedIn && <RegistrationBox />}
        {loggedIn && <ProfileBox />}
        <FilterBox />
        <Products />
      </HomePageContainer>
    </MainLayout>
  );
};

export default HomePage;
