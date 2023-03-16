import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SET_ADDRESS,
  SET_ADMIN,
  SET_CITY,
  SET_CURRENT_EMAIL,
  SET_IS_LOADING,
  SET_LOGGED_IN,
  SET_NAME,
  SET_POSTAL_CODE,
} from "../../../store/slices/AuthSlice";
import { ApiInstance } from "../../../api/api";

const useHeader = () => {
  const { currentEmail } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = async () => {
    let email = "";
    if (currentEmail.split('"')[2]) {
      email = currentEmail.split('"')[2];
    } else {
      email = currentEmail;
    }
    try {
      dispatch(SET_IS_LOADING(true));
      await ApiInstance.patch(`users/${email}`, {
        loggedIn: false,
      });
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
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(SET_IS_LOADING(false));
    }
  };

  return { logout };
};

export default useHeader;
