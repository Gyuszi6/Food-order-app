import { SET_TEXT, SET_TYPE, SET_SHOW } from "../store/slices/AlertSlice";
import { useDispatch } from "react-redux";

export const useAlert = () => {
  const dispatch = useDispatch();
  const showErrorNotification = (text) => {
    dispatch(SET_TEXT(text));
    dispatch(SET_TYPE("error"));
    dispatch(SET_SHOW(true));
  };

  const showSuccessNotification = (text) => {
    dispatch(SET_TEXT(text));
    dispatch(SET_TYPE("success"));
    dispatch(SET_SHOW(true));
  };

  return { showErrorNotification, showSuccessNotification };
};
