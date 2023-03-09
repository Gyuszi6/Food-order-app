import AuthLayout from "../layouts/authLayout/AuthLayout";
import useOrders from "./hooks/useOrders";
import { useSelector, useDispatch } from "react-redux";
import {
  Content,
  OrderElements,
  OrderItem,
  OrderLabelBox,
  DateContainer,
  NameContainer,
  AddressContainer,
  PriceContainer,
  DateLabelcontainer,
  NameLabelcontainer,
  AddressLabelcontainer,
  PriceLabelcontainer,
  FinishedOrderButton,
  ShowItemsButton,
  ItemListConatiner,
  ExitItemListButton,
  ShowItemsButtonMobile,
  TextOnMobile,
} from "./styles";
import { useState, useEffect } from "react";
import {
  SET_CURRENT_ADDRESS,
  SET_CURRENT_NAME,
  SET_CURRENT_ORDER,
  SET_CURRENT_TOTAL_PRICE,
} from "../../store/slices/OrderSlice";
import { BiCheck } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const OrderPage = () => {
  const { t } = useTranslation();
  const { getAllOrders, deleteOrder } = useOrders();
  const dispatch = useDispatch();
  const {
    orders,
    currentOrder,
    currentName,
    currentAddress,
    currentTotalPrice,
  } = useSelector((state) => state.order);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      getAllOrders();
    }, 60000);

    return () => clearInterval(interval);
  }, [getAllOrders]);

  return (
    <AuthLayout>
      <Content>
        <OrderLabelBox>
          <DateLabelcontainer>{t("DATE")}</DateLabelcontainer>
          <NameLabelcontainer>{t("NAME")}</NameLabelcontainer>
          <AddressLabelcontainer>{t("ADDRESS")}</AddressLabelcontainer>
          <PriceLabelcontainer>{t("PRICE")}</PriceLabelcontainer>
        </OrderLabelBox>
        <OrderElements>
          <div>
            {orders.map((order) => {
              return (
                <OrderItem key={order.orderId}>
                  <DateContainer>{order.date}</DateContainer>
                  <NameContainer>{order.name}</NameContainer>
                  <AddressContainer>{order.address}</AddressContainer>
                  <PriceContainer>{order.totalPrice}</PriceContainer>
                  <ShowItemsButton
                    onClick={() => {
                      if (!showItems) {
                        dispatch(SET_CURRENT_ORDER(order.itemList));
                        setShowItems(true);
                      } else {
                        dispatch(SET_CURRENT_ORDER(order.itemList));
                      }
                    }}
                  >
                    +
                  </ShowItemsButton>
                  <ShowItemsButtonMobile
                    onClick={() => {
                      if (!showItems) {
                        dispatch(SET_CURRENT_ORDER(order.itemList));
                        dispatch(SET_CURRENT_NAME(order.name));
                        dispatch(SET_CURRENT_ADDRESS(order.address));
                        dispatch(SET_CURRENT_TOTAL_PRICE(order.totalPrice));
                        setShowItems(true);
                      } else {
                        dispatch(SET_CURRENT_ORDER(order.itemList));
                      }
                    }}
                  >
                    +
                  </ShowItemsButtonMobile>
                  {showItems && (
                    <ItemListConatiner>
                      <ExitItemListButton
                        onClick={() => {
                          setShowItems(false);
                          dispatch(SET_CURRENT_ORDER([]));
                        }}
                      >
                        X
                      </ExitItemListButton>
                      <TextOnMobile>
                        {t("NAME")} {currentName}
                      </TextOnMobile>
                      <TextOnMobile>
                        {t("ADDRESS")} {currentAddress}
                      </TextOnMobile>
                      <TextOnMobile>
                        {t("PRICE")} {currentTotalPrice}
                      </TextOnMobile>
                      {showItems &&
                        currentOrder.map((food) => {
                          return (
                            <div key={food.id}>
                              {food.name} - {food.cartQuantity}
                            </div>
                          );
                        })}
                    </ItemListConatiner>
                  )}
                  <FinishedOrderButton
                    onClick={async () => {
                      await deleteOrder(order.orderId);
                      await getAllOrders();
                    }}
                  >
                    <BiCheck />
                  </FinishedOrderButton>
                </OrderItem>
              );
            })}
          </div>
        </OrderElements>
      </Content>
    </AuthLayout>
  );
};

export default OrderPage;
