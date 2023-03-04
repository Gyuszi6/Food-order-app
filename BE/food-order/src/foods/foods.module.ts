import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';
import { FoodsRepository } from './foods.repository';
import { Food, FoodSchema } from './schemas/food.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }]),
  ],
  controllers: [FoodsController],
  providers: [FoodsService, FoodsRepository],
})
export class FoodsModule {}
