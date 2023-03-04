import {
  Controller,
  Body,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { FoodsService } from './foods.service';
import { Food } from './schemas/food.schema';

@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Get()
  async getFoods(): Promise<Food[]> {
    return this.foodsService.getFoods();
  }

  @Post('/create')
  async createFood(@Body() createFoodDto: CreateFoodDto): Promise<Food> {
    const food = await this.foodsService.createFood(
      createFoodDto.name,
      createFoodDto.description,
      createFoodDto.price,
      createFoodDto.type,
      createFoodDto.image,
    );
    return food;
  }

  @Patch(':foodId')
  async updateFood(
    @Param('foodId') foodId: number,
    @Body() createFoodDto: CreateFoodDto,
  ): Promise<Food> {
    return this.foodsService.updateFood(foodId, createFoodDto);
  }

  @Delete(':foodId')
  async deleteFood(@Param('foodId') foodId: number): Promise<Food> {
    return this.foodsService.deleteFood(foodId);
  }
}
