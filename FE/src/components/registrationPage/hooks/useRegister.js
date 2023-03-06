import { ApiInstance } from "../../../api/api";

const useRegister = () => {
  const register = async ({ email, password, rePassword }) => {
    try {
      if (password === rePassword) {
        await ApiInstance.post("users/signup", {
          email: email,
          password: password,
        });
      } else {
        console.log("nem egyeznek a jelszavak");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { register };
};

export default useRegister;
