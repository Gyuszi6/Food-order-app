import { InputBox, FoodLabel, FoodInputField } from "./styles";

const FoodInput = ({ name, value, label, setFieldValue }) => {
  return (
    <InputBox>
      <FoodLabel>{label} </FoodLabel>
      <FoodInputField
        name={name}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
      />
    </InputBox>
  );
};

export default FoodInput;
