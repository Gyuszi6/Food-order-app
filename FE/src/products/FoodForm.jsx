import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import useFoods from "./hooks/useFoods";
import { useTranslation } from "react-i18next";
import FoodInput from "../elements/inputs/FoodInput";
import { useSelector, useDispatch } from "react-redux";
import {
  FoodFormButton,
  FoodFormContainer,
  ExitFoodFormButton,
} from "./styles";
import {
  SET_CHANGE_FOOD_FORM,
  SET_CURRENT_DESCRIPTION,
  SET_CURRENT_IMAGE,
  SET_CURRENT_NAME,
  SET_CURRENT_PRICE,
  SET_CURRENT_TYPE,
  SET_CURRENT_FOOD_ID,
} from "../store/slices/FoodSlice";

const FoodForm = () => {
  const dispatch = useDispatch();
  const { changeFoodForm, currentFoodId } = useSelector((state) => state.food);
  const {
    currentPrice,
    currentImage,
    currentName,
    currentType,
    currentDescription,
  } = useSelector((state) => state.food);
  const { changeFood, getFoods, createFood } = useFoods();
  const { t } = useTranslation();
  const foodSchema = yup.object().shape({
    name: yup.string().trim().required(),
    description: yup.string().trim().required(),
    price: yup.number().required(),
    type: yup.string().trim().required(),
    image: yup.string().trim().required(),
  });

  return (
    <FoodFormContainer>
      <ExitFoodFormButton
        onClick={() => {
          dispatch(SET_CHANGE_FOOD_FORM(false));
          dispatch(SET_CURRENT_DESCRIPTION(""));
          dispatch(SET_CURRENT_IMAGE(""));
          dispatch(SET_CURRENT_NAME(""));
          dispatch(SET_CURRENT_TYPE(""));
          dispatch(SET_CURRENT_PRICE(""));
          dispatch(SET_CURRENT_FOOD_ID(0));
        }}
      >
        X
      </ExitFoodFormButton>
      <Formik
        initialValues={{
          name: currentName,
          description: currentDescription,
          type: currentType,
          price: currentPrice,
          image: currentImage,
        }}
        validateOnMount={true}
        enableReinitialize={true}
        validationSchema={foodSchema}
        onSubmit={async (name, description, type, price, image) => {
          if (currentFoodId === 0) {
            await createFood(name, description, type, price, image);
          } else {
            await changeFood(name, description, type, price, image);
          }
          await getFoods();
          dispatch(SET_CHANGE_FOOD_FORM(!changeFoodForm));
          dispatch(SET_CURRENT_DESCRIPTION(""));
          dispatch(SET_CURRENT_IMAGE(""));
          dispatch(SET_CURRENT_NAME(""));
          dispatch(SET_CURRENT_TYPE(""));
          dispatch(SET_CURRENT_PRICE(""));
          dispatch(SET_CURRENT_FOOD_ID(0));
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <Field
              as={FoodInput}
              name="name"
              touched={touched["name"]}
              errors={errors["name"]}
              label={t("NAME")}
              setFieldValue={setFieldValue}
            />
            <Field
              as={FoodInput}
              name="description"
              touched={touched["description"]}
              errors={errors["description"]}
              label={t("DESCRIPTION")}
              setFieldValue={setFieldValue}
            />
            <Field
              as={FoodInput}
              name="price"
              touched={touched["price"]}
              errors={errors["price"]}
              label={t("PRICE")}
              setFieldValue={setFieldValue}
            />
            <Field
              as={FoodInput}
              name="type"
              touched={touched["type"]}
              errors={errors["type"]}
              label={t("TYPE")}
              setFieldValue={setFieldValue}
            />
            <Field
              as={FoodInput}
              name="image"
              touched={touched["image"]}
              errors={errors["image"]}
              label={t("IMAGE")}
              setFieldValue={setFieldValue}
            />

            <FoodFormButton type="submit">{t("SAVE")}</FoodFormButton>
          </Form>
        )}
      </Formik>
    </FoodFormContainer>
  );
};

export default FoodForm;
