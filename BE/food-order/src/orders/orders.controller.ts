import { Controller, Body, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Order } from './schemas/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Post('/create')
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    const order = await this.ordersService.createOrder(
      createOrderDto.email,
      createOrderDto.name,
      createOrderDto.itemList,
      createOrderDto.address,
      createOrderDto.totalPrice,
    );
    return order;
  }
}
