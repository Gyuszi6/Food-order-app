import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDoc = Food & Document;

@Schema()
export class Food {
  @Prop()
  foodId: number;

  @Prop({ unique: [true, 'email is already in use'] })
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  type: string;

  @Prop()
  image: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
