import { useCallback, useEffect } from "react";
import { ApiInstance } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { SET_FOODS, SET_IS_LOADING } from "../../store/slices/FoodSlice";

const useFoods = () => {
  const dispatch = useDispatch();
  const { currentFoodId } = useSelector((state) => state.food);
  const getFoods = useCallback(async () => {
    dispatch(SET_IS_LOADING(true));
    try {
      const response = await ApiInstance.get("/foods");
      const data = response.data;
      dispatch(SET_FOODS(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(SET_IS_LOADING(false));
    }
  }, [dispatch]);

  const createFood = async ({ name, description, type, price, image }) => {
    try {
      await ApiInstance.post("/foods/create", {
        name: name,
        description: description,
        type: type,
        price: price,
        image: image,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFood = async (id) => {
    try {
      await ApiInstance.delete(`/foods/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const changeFood = async ({ name, description, type, price, image }) => {
    try {
      await ApiInstance.patch(`/foods/${currentFoodId}`, {
        name: name,
        description: description,
        type: type,
        price: price,
        image: image,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, [getFoods]);

  return { getFoods, deleteFood, changeFood, createFood };
};

export default useFoods;
