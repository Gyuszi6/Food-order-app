import { ApiInstance } from "../../../api/api";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_ADDRESS,
  SET_ADMIN,
  SET_CITY,
  SET_CURRENT_EMAIL,
  SET_LOGGED_IN,
  SET_NAME,
  SET_POSTAL_CODE,
} from "../../../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

const useLogin = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { currentEmail } = useSelector((state) => state.auth);

  const login = useCallback(
    async ({ email, password }) => {
      try {
        await ApiInstance.post("users/signin", {
          email: email,
          password: password,
        });
        await ApiInstance.patch(`users/${email}`, {
          loggedIn: true,
        });

        dispatch(SET_LOGGED_IN(true));
        dispatch(SET_CURRENT_EMAIL(email));
        nav("/home");
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, nav]
  );

  const getCurrentUserData = useCallback(async () => {
    try {
      if (currentEmail.split('"')[2]) {
        let email = currentEmail.split('"')[2];

        const response = await ApiInstance.get(`users/${email}`);
        const data = response.data;
        if (response.data.loggedIn === true) {
          dispatch(SET_NAME(data.name));
          dispatch(SET_ADMIN(data.admin));
          dispatch(SET_POSTAL_CODE(data.postalCode));
          dispatch(SET_CITY(data.city));
          dispatch(SET_ADDRESS(data.address));
        }
      } else {
        const response = await ApiInstance.get(`users/${currentEmail}`);
        const data = response.data;
        if (response.data.loggedIn === true) {
          dispatch(SET_NAME(data.name));
          dispatch(SET_ADMIN(data.admin));
          dispatch(SET_POSTAL_CODE(data.postalCode));
          dispatch(SET_CITY(data.city));
          dispatch(SET_ADDRESS(data.address));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentEmail, dispatch]);

  useEffect(() => {
    getCurrentUserData();
  }, [getCurrentUserData, login]);

  return { login, getCurrentUserData };
};

export default useLogin;
