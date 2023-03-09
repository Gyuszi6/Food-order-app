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
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let formattedDate = `${year}.${month}.${day}-${hour}:${min}`;
    return this.ordersRepositroy.create({
      orderId: Math.random() * 10,
      email,
      name,
      itemList,
      address: address,
      totalPrice,
      date: formattedDate,
    });
  }

  async deleteOrder(orderId: number): Promise<Order> {
    return this.ordersRepositroy.findOneAndDelete({ orderId });
  }
}
