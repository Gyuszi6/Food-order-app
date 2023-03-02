import { PriceInputBox, PriceInputField, Label } from "./styles";

const PriceInput = ({ name, value, label, setFieldValue }) => {
  return (
    <PriceInputBox>
      <Label>{label} </Label>
      <PriceInputField
        name={name}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
      />
    </PriceInputBox>
  );
};

export default PriceInput;
