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
} from "../../store/slices/TypeSlice";
import { useState } from "react";
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
  const { minPrice, maxPrice } = useSelector((state) => state.type);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState("0");
  const { t } = useTranslation();
  return (
    <FoodFilterContainer>
      <ButtonContainer>
        <TypeButton
          menuItemId="0"
          activeButtonId={isActive}
          onClick={() => {
            dispatch(SET_DELETE_TYPE());
            setIsActive("0");
          }}
        >
          {isActive === "0" && <MdOutlineArrowForwardIos />}
          {t("SHOW_ALL")}
          {isActive === "0" && <MdOutlineArrowBackIos />}
        </TypeButton>
        <TypeButton
          menuItemId="1"
          activeButtonId={isActive}
          onClick={() => {
            dispatch(SET_TYPE("pizza"));
            setIsActive("1");
          }}
        >
          {isActive === "1" && <MdOutlineArrowForwardIos />}
          {t("PIZZA")}
          {isActive === "1" && <MdOutlineArrowBackIos />}
        </TypeButton>
        <TypeButton
          menuItemId="2"
          activeButtonId={isActive}
          onClick={() => {
            dispatch(SET_TYPE("hamburger"));
            setIsActive("2");
          }}
        >
          {isActive === "2" && <MdOutlineArrowForwardIos />}
          {t("BURGER")}
          {isActive === "2" && <MdOutlineArrowBackIos />}
        </TypeButton>
        <TypeButton
          menuItemId="3"
          activeButtonId={isActive}
          onClick={() => {
            dispatch(SET_TYPE("gyros"));
            setIsActive("3");
          }}
        >
          {isActive === "3" && <MdOutlineArrowForwardIos />}
          {t("GYROS")}
          {isActive === "3" && <MdOutlineArrowBackIos />}
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
