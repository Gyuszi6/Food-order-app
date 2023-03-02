import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import {
  MobileFilterPanel,
  MobileFilterPanelButton,
  MobileFilterPanelContent,
  MobileFilterPanelHead,
  MobileFilterPanelLabel,
} from "./styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FilterForm from "../sidePanel/FilterForm";

const FilterBox = () => {
  const { t } = useTranslation();
  const [showInput, setShowInput] = useState(false);
  return (
    <MobileFilterPanel>
      <MobileFilterPanelHead>
        <MobileFilterPanelButton onClick={() => setShowInput(!showInput)}>
          {!showInput && <BiRightArrow />}
          {showInput && <BiDownArrow />}
        </MobileFilterPanelButton>
        <MobileFilterPanelLabel>{t("FILTER")}</MobileFilterPanelLabel>
      </MobileFilterPanelHead>
      {showInput && (
        <MobileFilterPanelContent>
          <FilterForm />
        </MobileFilterPanelContent>
      )}
    </MobileFilterPanel>
  );
};

export default FilterBox;
