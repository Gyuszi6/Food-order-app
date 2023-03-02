import FilterBox from "../../elements/mobile/FilterBox";
import LoginBox from "../../elements/mobile/LoginBox";
import RegistrationBox from "../../elements/mobile/RegistrationBox";
import Products from "../../products/Products";
import MainLayout from "../layouts/mainLayout/MainLayout";
import { HomePageContainer } from "./styles";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <MainLayout>
      <HomePageContainer>
        {!loggedIn && <LoginBox />}
        {!loggedIn && <RegistrationBox />}
        <FilterBox />
        <Products />
      </HomePageContainer>
    </MainLayout>
  );
};

export default HomePage;
