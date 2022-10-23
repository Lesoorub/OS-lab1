import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { GetdateFoodDto } from './dto/get-food.dto copy';
import { UpdateFoodDto } from './dto/update-food.dto';

@Injectable()
export class FoodService {
  create(createFoodDto: CreateFoodDto) {
    return 'This action adds a new food';
  }

  findAll(offset:number, count:number) {
    return `This action returns all food`;
  }

  findOne(id: number, getdateFoodDto: GetdateFoodDto) {
    return `This action returns a #${id} food`;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}
