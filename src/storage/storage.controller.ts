import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { GetStorageDto } from './dto/get-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Модуль работы с файлами и медиа-коллекциями')
@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @ApiOperation({ summary: 'Создание файла' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() createStorageDto: CreateStorageDto) {
    return this.storageService.create(createStorageDto);
  }
  
  @ApiOperation({ summary: 'Получение конкретного файла' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Get(':id')
  findOne(@Param('id') id: number, @Body() getStorageDto: GetStorageDto) {
    return this.storageService.get(+id, getStorageDto);
  }
  
  @ApiOperation({ summary: 'Получение списка файла' })
  @ApiResponse({ status: 200 })
  @ApiQuery ({ name: 'offset', type: 'number', description: 'Смещение',example:0})
  @ApiQuery ({ name: 'count', type: 'number', description: 'Количество записей на странице',example:1})
  @Get()
  findAll(
    @Query('offset') offset: number, 
    @Query('count') count: number 
  ) {
    return this.storageService.getAll(offset, count);
  }

  @ApiOperation({ summary: 'Изменение файла' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Put(':id')
  update(@Param('id') id: number, @Body() updateStorageDto: UpdateStorageDto) {
    return this.storageService.update(+id, updateStorageDto);
  }
  
  @ApiOperation({ summary: 'Удаление файла' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.storageService.remove(+id);
  }
}
