import { ApiInstance } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_ADDRESS,
  SET_CITY,
  SET_NAME,
  SET_POSTAL_CODE,
} from "../../../store/slices/AuthSlice";

const useProfile = () => {
  const dispatch = useDispatch();
  const { currentEmail } = useSelector((state) => state.auth);

  const changeProfile = async ({ name, postalCode, city, address }) => {
    try {
      if (currentEmail.split('"')[2]) {
        let email = currentEmail.split('"')[2];

        await ApiInstance.patch(`/users/${email}`, {
          name: name,
          postalCode: postalCode,
          city: city,
          address: address,
        });
        dispatch(SET_NAME(name));
        dispatch(SET_POSTAL_CODE(postalCode));
        dispatch(SET_CITY(city));
        dispatch(SET_ADDRESS(address));
      } else {
        await ApiInstance.patch(`/users/${currentEmail}`, {
          name: name,
          postalCode: postalCode,
          city: city,
          address: address,
        });
        dispatch(SET_NAME(name));
        dispatch(SET_POSTAL_CODE(postalCode));
        dispatch(SET_CITY(city));
        dispatch(SET_ADDRESS(address));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { changeProfile };
};

export default useProfile;
