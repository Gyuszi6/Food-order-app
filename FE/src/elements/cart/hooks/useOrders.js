import { ApiInstance } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { SET_RESET_CART } from "../../../store/slices/CartSlice";

const useOrders = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const { currentEmail, name, postalCode, city, address } = useSelector(
    (state) => state.auth
  );

  const formattedPrice = `${Math.round(totalPrice * 100) / 100}$`;
  const createOrder = async () => {
    try {
      if (currentEmail.split('"')[2]) {
        let email = currentEmail.split('"')[2];
        email = email.substring(0, email.length - 1);
        const formattedAddress = `${postalCode} ${city} ${address}`;
        await ApiInstance.post("/orders/create", {
          email: email,
          name: name,
          itemList: cart,
          address: formattedAddress,
          totalPrice: formattedPrice,
        });
        dispatch(SET_RESET_CART());
      } else {
        await ApiInstance.post("/orders/create", {
          email: currentEmail,
          name: name,
          itemList: cart,
          address: `${postalCode} ${city} ${address}`,
          totalPrice: formattedPrice,
        });
        dispatch(SET_RESET_CART());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SendEmail = async () => {
    try {
      if (currentEmail.split('"')[2]) {
        let email = currentEmail.split('"')[2];
        email = email.substring(0, email.length - 1);
        const formattedAddress = `${postalCode} ${city} ${address}`;
        await ApiInstance.post("/email/order", {
          email: email,
          name: name,
          itemList: cart,
          address: formattedAddress,
          totalPrice: formattedPrice,
        });
        dispatch(SET_RESET_CART());
      } else {
        await ApiInstance.post("/email/order", {
          email: currentEmail,
          name: name,
          itemList: cart,
          address: `${postalCode} ${city} ${address}`,
          totalPrice: formattedPrice,
        });
        dispatch(SET_RESET_CART());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { createOrder, SendEmail };
};

export default useOrders;
