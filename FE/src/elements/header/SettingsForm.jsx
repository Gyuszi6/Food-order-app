import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { SET_THEME } from "../../store/slices/ThemeSlice";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import {
  LanguageButton,
  ThemeIconSun,
  ThemeIconMoon,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
  MobileSettings,
} from "./stlyes";

const SettingsForm = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      {language === "en" && (
        <LanguageButton onClick={() => changeLanguage("hu")}>
          {t("HEADER_LANGUAGE")}
        </LanguageButton>
      )}
      {(language === "hu" || language === "hu-HU") && (
        <LanguageButton onClick={() => changeLanguage("en")}>
          {t("HEADER_LANGUAGE")}
        </LanguageButton>
      )}
      <MobileSettings>
        <ThemeIconSun>
          <BsFillSunFill />
        </ThemeIconSun>
        <CheckBoxWrapper>
          <CheckBox
            id="checkbox"
            type="checkbox"
            onChange={() =>
              theme === "light"
                ? dispatch(SET_THEME("dark"))
                : dispatch(SET_THEME("light"))
            }
            checked={theme !== "light"}
          />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
        <ThemeIconMoon>
          <BsFillMoonFill />
        </ThemeIconMoon>
      </MobileSettings>
    </>
  );
};

export default SettingsForm;
