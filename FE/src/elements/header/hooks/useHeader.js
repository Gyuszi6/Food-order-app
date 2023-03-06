import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SET_ADDRESS,
  SET_ADMIN,
  SET_CITY,
  SET_CURRENT_EMAIL,
  SET_LOGGED_IN,
  SET_NAME,
  SET_POSTAL_CODE,
} from "../../../store/slices/AuthSlice";

const useHeader = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = () => {
    dispatch(SET_LOGGED_IN(false));
    dispatch(SET_ADMIN(false));
    dispatch(SET_NAME(""));
    dispatch(SET_POSTAL_CODE(""));
    dispatch(SET_CITY(""));
    dispatch(SET_ADDRESS(""));
    dispatch(SET_CURRENT_EMAIL(""));
    localStorage.removeItem("loggedin");
    localStorage.removeItem("admin");
    localStorage.removeItem("postalcode");
    localStorage.removeItem("city");
    localStorage.removeItem("address");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    nav("/home");
  };

  return { logout };
};

export default useHeader;
