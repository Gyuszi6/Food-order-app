import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { FoodsRepository } from './foods.repository';
import { Food } from './schemas/food.schema';

@Injectable()
export class FoodsService {
  constructor(private foodsRepository: FoodsRepository) {}

  async getFoodById(foodId: number): Promise<Food> {
    if (!foodId) {
      return null;
    }
    return this.foodsRepository.findOne({ foodId });
  }

  findOne(foodId: number) {
    return this.foodsRepository.findOne({ foodId });
  }

  async getFoods(): Promise<Food[]> {
    return this.foodsRepository.find({});
  }

  async find(name: string) {
    return this.foodsRepository.find({ name });
  }

  async createFood(
    name: string,
    description: string,
    price: number,
    type: string,
    image: string,
  ): Promise<Food> {
    return this.foodsRepository.create({
      foodId: Math.random() * 10,
      name,
      description,
      price,
      type,
      image,
    });
  }

  async updateFood(foodId: number, foodUpdates: CreateFoodDto): Promise<Food> {
    return this.foodsRepository.findOneAndUpdate({ foodId }, foodUpdates);
  }

  async deleteFood(foodId: number): Promise<Food> {
    return this.foodsRepository.findOneAndDelete({ foodId });
  }
}
