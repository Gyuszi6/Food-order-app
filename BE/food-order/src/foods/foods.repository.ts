import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Food, FoodDoc } from './schemas/food.schema';

@Injectable()
export class FoodsRepository {
  constructor(@InjectModel(Food.name) private foodModel: Model<FoodDoc>) {}

  async findOne(foodFilterQuery: FilterQuery<Food>): Promise<Food> {
    return this.foodModel.findOne(foodFilterQuery);
  }

  async find(foodsFilterQuery: FilterQuery<Food>): Promise<Food[]> {
    return this.foodModel.find(foodsFilterQuery);
  }

  async create(food: Food): Promise<Food> {
    const newFood = new this.foodModel(food);
    return newFood.save();
  }

  async findOneAndUpdate(
    foodFilterQuery: FilterQuery<Food>,
    food: Partial<Food>,
  ): Promise<Food> {
    return this.foodModel.findOneAndUpdate(foodFilterQuery, food, {
      new: true,
    });
  }

  async findOneAndDelete(foodFilterQuery: FilterQuery<Food>): Promise<Food> {
    return this.foodModel.findOneAndDelete(foodFilterQuery);
  }
}
