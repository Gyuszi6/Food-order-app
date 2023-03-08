import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tgyuszi38:Yf0wVkImuKx1rGCw@cluster0.5yaujms.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    FoodsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
