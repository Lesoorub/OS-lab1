import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { RewardsService } from './rewards.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetRewardDto } from './dto/get-reward.dto copy';

@ApiTags('Модуль работы с наградами')
@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardsService: RewardsService) {}

  @ApiOperation({ summary: 'Добавление награды' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() createRewardDto: CreateRewardDto) {
    return this.rewardsService.create(createRewardDto);
  }

  @ApiOperation({ summary: 'Получить список наград' })
  @ApiResponse({ status: 200 })
  @ApiQuery ({ name: 'offset', type: 'number', description: 'Смещение',example:0})
  @ApiQuery ({ name: 'count', type: 'number', description: 'Количество записей на странице',example:1})
  @Get()
  findAll(
    @Query('offset') offset: number, 
    @Query('count') count: number 
  ) {
    return this.rewardsService.findAll(offset, count);
  }

  @ApiOperation({ summary: 'Получить данные о награде' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Get(':id')
  findOne(@Param('id') id: number, @Body() getRewardDto: GetRewardDto) {
    return this.rewardsService.findOne(+id, getRewardDto);
  }

  @ApiOperation({ summary: 'Обновить данные о награде' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRewardDto: UpdateRewardDto) {
    return this.rewardsService.update(+id, updateRewardDto);
  }

  @ApiOperation({ summary: 'Удаление данных награды' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rewardsService.remove(+id);
  }
}
