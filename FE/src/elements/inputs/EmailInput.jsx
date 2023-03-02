import { EmailInputField, InputBox, Label } from "./styles";

const EmailInput = ({ name, value, label, setFieldValue }) => {
  return (
    <InputBox>
      <Label>{label} </Label>
      <EmailInputField
        name={name}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
      />
    </InputBox>
  );
};

export default EmailInput;
