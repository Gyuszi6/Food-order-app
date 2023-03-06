import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDoc = User & Document;

@Schema()
export class User {
  @Prop()
  userId: number;

  @Prop({ unique: [true, 'email is already in use'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  postalCode: string;

  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop()
  admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
