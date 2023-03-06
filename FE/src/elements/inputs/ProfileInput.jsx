import { ProfileInputField, InputBox, Label } from "./styles";

const ProfileInput = ({ name, value, label, setFieldValue }) => {
  return (
    <InputBox>
      <Label>{label} </Label>
      <ProfileInputField
        name={name}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
      />
    </InputBox>
  );
};

export default ProfileInput;
