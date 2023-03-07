import {
  MobileAuthPanel,
  MobileAuthPanelLabel,
  MobileFoodPanelHead,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { SET_CHANGE_FOOD_FORM } from "../../store/slices/FoodSlice";

const FoodBox = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <MobileAuthPanel onClick={() => dispatch(SET_CHANGE_FOOD_FORM(true))}>
      <MobileFoodPanelHead>
        <MobileAuthPanelLabel>{t("CREATE_FOOD")}</MobileAuthPanelLabel>
      </MobileFoodPanelHead>
    </MobileAuthPanel>
  );
};

export default FoodBox;
