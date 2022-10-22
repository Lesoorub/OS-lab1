import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { GetStorageDto } from './dto/get-storage.dto';
import { GetAllStorageDto } from './dto/getAll-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storageService.get(+id);
  }
  
  @ApiOperation({ summary: 'Получение списка файла' })
  @ApiResponse({ status: 200 })
  @Get()
  findAll(
    @Query('offset') offset: number, 
    @Query('count') count:number 
  ) {
    return this.storageService.getAll(offset, count);
  }

  @ApiOperation({ summary: 'Изменение файла' })
  @ApiResponse({ status: 200 })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStorageDto: UpdateStorageDto) {
    return this.storageService.update(+id, updateStorageDto);
  }
  
  @ApiOperation({ summary: 'Удаление файла' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storageService.remove(+id);
  }
}
