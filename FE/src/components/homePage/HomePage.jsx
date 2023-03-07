import FilterBox from "../../elements/mobile/FilterBox";
import LoginBox from "../../elements/mobile/LoginBox";
import ProfileBox from "../../elements/mobile/ProfileBox";
import FoodBox from "../../elements/mobile/FoodBox";
import RegistrationBox from "../../elements/mobile/RegistrationBox";
import Products from "../../products/Products";
import MainLayout from "../layouts/mainLayout/MainLayout";
import { HomePageContainer } from "./styles";
import { useSelector } from "react-redux";
import useLogin from "../loginPage/hooks/useLogin";
import FoodForm from "../../products/FoodForm";

const HomePage = () => {
  const { loggedIn, isAdmin } = useSelector((state) => state.auth);
  const { changeFoodForm } = useSelector((state) => state.food);
  const { getCurrentUserData } = useLogin();

  getCurrentUserData();

  return (
    <MainLayout>
      <HomePageContainer>
        {!loggedIn && <LoginBox />}
        {!loggedIn && <RegistrationBox />}
        {!isAdmin && loggedIn && <ProfileBox />}
        {loggedIn && isAdmin && <FoodBox />}
        {loggedIn && isAdmin && changeFoodForm && <FoodForm />}
        <FilterBox />
        <Products />
      </HomePageContainer>
    </MainLayout>
  );
};

export default HomePage;
