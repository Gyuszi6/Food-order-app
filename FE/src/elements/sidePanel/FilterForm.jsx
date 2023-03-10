import {
  ButtonContainer,
  PriceFilterButton,
  PriceFilterContainer,
  TypeButton,
  PriceButtonContainer,
  FoodFilterContainer,
  PriceInputContainer,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_TYPE,
  SET_DELETE_TYPE,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_CURRENT_ACTIVE,
} from "../../store/slices/TypeSlice";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import PriceInput from "../inputs/PriceInput";

const filterSchema = yup.object().shape({
  min: yup.number(),
  max: yup.number(),
});

const FilterForm = () => {
  const { minPrice, maxPrice, currentActive } = useSelector(
    (state) => state.type
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <FoodFilterContainer>
      <ButtonContainer>
        <TypeButton
          menuItemId="0"
          activeButtonId={currentActive}
          onClick={() => {
            dispatch(SET_DELETE_TYPE());
            dispatch(SET_CURRENT_ACTIVE("0"));
          }}
        >
          {currentActive === "0" && <MdOutlineArrowForwardIos />}
          {t("SHOW_ALL")}
          {currentActive === "0" && <MdOutlineArrowBackIos />}
        </TypeButton>
        <TypeButton
          menuItemId="1"
          activeButtonId={currentActive}
          onClick={() => {
            dispatch(SET_TYPE("pizza"));
            dispatch(SET_CURRENT_ACTIVE("1"));
          }}
        >
          {currentActive === "1" && <MdOutlineArrowForwardIos />}
          {t("PIZZA")}
          {currentActive === "1" && <MdOutlineArrowBackIos />}
        </TypeButton>
        <TypeButton
          menuItemId="2"
          activeButtonId={currentActive}
          onClick={() => {
            dispatch(SET_TYPE("hamburger"));
            dispatch(SET_CURRENT_ACTIVE("2"));
          }}
        >
          {currentActive === "2" && <MdOutlineArrowForwardIos />}
          {t("BURGER")}
          {currentActive === "2" && <MdOutlineArrowBackIos />}
        </TypeButton>
        <TypeButton
          menuItemId="3"
          activeButtonId={currentActive}
          onClick={() => {
            dispatch(SET_TYPE("bowl"));
            dispatch(SET_CURRENT_ACTIVE("3"));
          }}
        >
          {currentActive === "3" && <MdOutlineArrowForwardIos />}
          {t("BOWL")}
          {currentActive === "3" && <MdOutlineArrowBackIos />}
        </TypeButton>
        <TypeButton
          menuItemId="4"
          activeButtonId={currentActive}
          onClick={() => {
            dispatch(SET_TYPE("other"));
            dispatch(SET_CURRENT_ACTIVE("4"));
          }}
        >
          {currentActive === "4" && <MdOutlineArrowForwardIos />}
          {t("OTHER")}
          {currentActive === "4" && <MdOutlineArrowBackIos />}
        </TypeButton>
      </ButtonContainer>
      <PriceFilterContainer>
        <Formik
          initialValues={{
            min: minPrice,
            max: maxPrice,
          }}
          validateOnMount={true}
          enableReinitialize={true}
          validationSchema={filterSchema}
          onSubmit={({ min, max }) => {
            dispatch(SET_MIN_PRICE(min));
            dispatch(SET_MAX_PRICE(max));
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <PriceInputContainer>
                <Field
                  as={PriceInput}
                  name="min"
                  label="min:"
                  setFieldValue={setFieldValue}
                />
                <Field
                  as={PriceInput}
                  name="max"
                  label="max:"
                  setFieldValue={setFieldValue}
                />
              </PriceInputContainer>
              <PriceButtonContainer>
                <PriceFilterButton type="submit">
                  {t("FILTER")}
                </PriceFilterButton>
                <PriceFilterButton
                  type="button"
                  onClick={() => {
                    dispatch(SET_MIN_PRICE(""));
                    dispatch(SET_MAX_PRICE(""));
                  }}
                >
                  {t("RESET")}
                </PriceFilterButton>
              </PriceButtonContainer>
            </Form>
          )}
        </Formik>
      </PriceFilterContainer>
    </FoodFilterContainer>
  );
};

export default FilterForm;
