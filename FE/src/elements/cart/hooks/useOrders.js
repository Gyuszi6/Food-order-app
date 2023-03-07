import { ApiInstance } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { SET_RESET_CART } from "../../../store/slices/CartSlice";

const useOrders = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const { name, postalCode, city, address } = useSelector(
    (state) => state.auth
  );
  let formattedCity = city.split('"')[2];
  formattedCity = formattedCity.substring(0, formattedCity.length - 1);
  const formattedAddress = `${postalCode} ${formattedCity} ${address}`;

  const formattedPrice = `${Math.round(totalPrice * 100) / 100}$`;
  const createOrder = async () => {
    try {
      await ApiInstance.post("/orders/create", {
        name: name,
        itemList: cart,
        address: formattedAddress,
        totalPrice: formattedPrice,
      });
      dispatch(SET_RESET_CART());
    } catch (error) {
      console.log(error);
    }
  };

  return { createOrder };
};

export default useOrders;
