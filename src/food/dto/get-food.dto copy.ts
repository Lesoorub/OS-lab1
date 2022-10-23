import { PartialType } from '@nestjs/swagger';
import { CreateFoodDto } from './create-food.dto';

export class GetdateFoodDto extends PartialType(CreateFoodDto) {}
