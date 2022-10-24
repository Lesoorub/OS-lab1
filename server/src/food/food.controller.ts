import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetdateFoodDto } from './dto/get-food.dto copy';

@ApiTags('Модуль работы со списком продуктов')
@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @ApiOperation({ summary: 'Добавление данных о еде' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.create(createFoodDto);
  }

  @ApiOperation({ summary: 'Получить список еды' })
  @ApiResponse({ status: 200 })
  @ApiQuery ({ name: 'offset', type: 'number', description: 'Смещение',example:0})
  @ApiQuery ({ name: 'count', type: 'number', description: 'Количество записей на странице',example:1})
  @Get()
  findAll(
    @Query('offset') offset: number, 
    @Query('count') count: number 
  ) {
    return this.foodService.findAll(offset, count);
  }

  @ApiOperation({ summary: 'Получить данные о еде' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Get(':id')
  findOne(@Param('id') id: number, @Body() getdateFoodDto: GetdateFoodDto) {
    return this.foodService.findOne(+id, getdateFoodDto);
  }

  @ApiOperation({ summary: 'Обновить данные о еде' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Put(':id')
  update(@Param('id') id: number, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(+id, updateFoodDto);
  }

  @ApiOperation({ summary: 'Удаление данных о еде' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.foodService.remove(+id);
  }
}
