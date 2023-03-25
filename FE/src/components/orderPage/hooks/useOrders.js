import { useCallback, useEffect } from "react";
import { ApiInstance } from "../../../api/api";
import { useDispatch } from "react-redux";
import { SET_ORDERS } from "../../../store/slices/OrderSlice";

const useOrders = () => {
  const dispatch = useDispatch();
  const getAllOrders = useCallback(async () => {
    try {
      const response = await ApiInstance.get("/orders");
      const data = response.data;
      dispatch(SET_ORDERS(data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const deleteOrder = async (id) => {
    try {
      await ApiInstance.delete(`/orders/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const changeOrderState = async (id) => {
    try {
      await ApiInstance.patch(`/orders/${id}`, {
        state: "preparing",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendLastEmail = async (email, name) => {
    try {
      await ApiInstance.post("/email/order-ready", {
        email: email,
        name: name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmail = async (email, name) => {
    try {
      await ApiInstance.post("/email/order-create", {
        email: email,
        name: name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  return {
    getAllOrders,
    deleteOrder,
    sendEmail,
    changeOrderState,
    sendLastEmail,
  };
};

export default useOrders;
