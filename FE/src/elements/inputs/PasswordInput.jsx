import {
  InputBox,
  Label,
  PasswordInputField,
  ShowPasswordButton,
} from "./styles";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

const PasswordInput = ({ name, value, label, setFieldValue }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputBox>
      <Label>{label}</Label>
      <PasswordInputField
        type={isVisible ? "text" : "password"}
        name={name}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
      />
      <ShowPasswordButton
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        type="button"
      >
        {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </ShowPasswordButton>
    </InputBox>
  );
};

export default PasswordInput;
