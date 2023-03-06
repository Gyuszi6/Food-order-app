import { useCallback, useEffect } from "react";
import { ApiInstance } from "../../api/api";
import { useDispatch } from "react-redux";
import { SET_FOODS } from "../../store/slices/FoodSlice";

const useFoods = () => {
  const dispatch = useDispatch();
  const getFoods = useCallback(async () => {
    try {
      const response = await ApiInstance.get("/foods");
      const data = response.data;
      dispatch(SET_FOODS(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getFoods();
  }, [getFoods]);

  return { getFoods };
};

export default useFoods;
