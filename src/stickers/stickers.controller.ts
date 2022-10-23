import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { StickersService } from './stickers.service';
import { CreateStickerDto } from './dto/create-sticker.dto';
import { UpdateStickerDto } from './dto/update-sticker.dto';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetStickerDto } from './dto/get-sticker.dto copy';

@ApiTags('Модуль работы со стикерами')
@Controller('stickers')
export class StickersController {
  constructor(private readonly stickersService: StickersService) {}

  @ApiOperation({ summary: 'Добавление стикеров' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() createStickerDto: CreateStickerDto) {
    return this.stickersService.create(createStickerDto);
  }

  @ApiOperation({ summary: 'Получить список стикеров' })
  @ApiResponse({ status: 200 })
  @ApiQuery ({ name: 'offset', type: 'number', description: 'Смещение',example:0})
  @ApiQuery ({ name: 'count', type: 'number', description: 'Количество записей на странице',example:1})
  @Get()
  findAll(
    @Query('offset') offset: number, 
    @Query('count') count: number 
  ) {
    return this.stickersService.findAll(offset, count);
  }

  @ApiOperation({ summary: 'Получить данные о стикере' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Get(':id')
  findOne(@Param('id') id: number, @Body() getStickerDto: GetStickerDto) {
    return this.stickersService.findOne(+id, getStickerDto);
  }

  @ApiOperation({ summary: 'Обновить данные стикера' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStickerDto: UpdateStickerDto) {
    return this.stickersService.update(+id, updateStickerDto);
  }

  @ApiOperation({ summary: 'Удаление данных стикера' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный индетификатор',example:0})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stickersService.remove(+id);
  }
}
