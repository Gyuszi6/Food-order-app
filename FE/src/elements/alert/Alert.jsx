import { useDispatch, useSelector } from "react-redux";
import { SET_SHOW } from "../../store/slices/AlertSlice";
import { AlertBox } from "./styles";
import { useEffect } from "react";

const Alert = () => {
  const { text, show, type } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(SET_SHOW(false)), 5000);
  }, [show, dispatch]);
  return (
    <AlertBox show={show} type={type}>
      {text}
    </AlertBox>
  );
};

export default Alert;
