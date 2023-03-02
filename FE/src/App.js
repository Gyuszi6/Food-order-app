import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./theme/LightTheme";
import { DarkTheme } from "./theme/DarkTheme";
import { useSelector } from "react-redux";
import RegistrationPage from "./components/registrationPage/RegistrationPage";
import LoginPage from "./components/loginPage/LoginPage";

function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;