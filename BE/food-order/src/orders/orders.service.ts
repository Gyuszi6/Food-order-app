import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private ordersRepositroy: OrdersRepository) {}

  async getOrders(): Promise<Order[]> {
    return this.ordersRepositroy.find({});
  }

  async createOrder(
    email: string,
    name: string,
    itemList: string[],
    address: string,
    totalPrice: string,
  ): Promise<Order> {
    let date = new Date();

    let month = '';
    if (date.getMonth() + 1 < 10) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth().toString();
    }
    let day = '';
    if (date.getDate() < 10) {
      day = `0${date.getDate()}`;
    } else {
      day = date.getDate().toString();
    }
    let hour = '';
    if (date.getHours() < 10) {
      hour = `0${date.getHours()}`;
    } else {
      hour = date.getHours().toString();
    }
    let min = '';
    if (date.getMinutes() < 10) {
      min = `0${date.getMinutes()}`;
    } else {
      min = date.getMinutes().toString();
    }
    let year = date.getFullYear();
    let formattedDate = `${year}.${month}.${day}-${hour}:${min}`;
    return this.ordersRepositroy.create({
      orderId: Math.random() * 10,
      email,
      name,
      itemList,
      address: address,
      totalPrice,
      date: formattedDate,
      state: 'pending',
    });
  }

  async updateOrder(
    orderId: number,
    orderUpdates: CreateOrderDto,
  ): Promise<Order> {
    return this.ordersRepositroy.findOneAndUpdate({ orderId }, orderUpdates);
  }

  async deleteOrder(orderId: number): Promise<Order> {
    return this.ordersRepositroy.findOneAndDelete({ orderId });
  }
}
