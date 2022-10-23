import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ExercicesService } from './exercices.service';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Модуль работы с упражнениями')
@Controller('exercices')
export class ExercicesController {
  constructor(private readonly exercicesService: ExercicesService) {}

  @ApiOperation({ summary: 'Получить данные упражнения' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.exercicesService.getOne(+id);
  }

  @ApiOperation({ summary: 'Получить весь список упражнений' })
  @ApiResponse({ status: 200 })
  @ApiQuery({ name: 'offset', type: 'number', description: 'Смещение',example:0})
  @ApiQuery({ name: 'count', type: 'number', description: 'Количество записей на странице',example:1})
  @Get()
  getAll(
    @Query('offset') offset: number, 
    @Query('count') count:number 
  ) {
    return this.exercicesService.getAll();
  }

  @ApiOperation({ summary: 'Обновить данные упражнения' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateExerciceDto: UpdateExerciceDto) {
    return this.exercicesService.update(+id, updateExerciceDto);
  }

  @ApiOperation({ summary: 'Удаление упражнения' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exercicesService.remove(+id);
  }

  @ApiOperation({ summary: 'Добавление упражнения' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() createExerciceDto: CreateExerciceDto) {
    return this.exercicesService.create(createExerciceDto);
  }
}
