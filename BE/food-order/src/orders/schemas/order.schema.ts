import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDoc = Order & Document;

@Schema()
export class Order {
  @Prop()
  orderId: number;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  itemList: string[];

  @Prop()
  address: string;

  @Prop()
  totalPrice: string;

  @Prop()
  date: string;

  @Prop()
  state: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
