import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiariesService } from './diaries.service';
import { addRewardToUserDiaryDto } from './dto/addRewardToUser-diary.dto';
import { addStikerToUserDiaryDto } from './dto/addStikerToUser-diary.dto';
import { updateStatisticUserDiaryDto } from './dto/updateStatisticUser-diary.dto';


@ApiTags('Пользователи: Модуль работы с пользовательской статистикой')
@Controller('user/diaries')
export class DiariesController {
  constructor(private readonly diariesService: DiariesService) {}
  @ApiOperation({ summary: 'Получить данные статистики пользователя' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Get('/data/:id')
  getStatisticUser(@Param('id') id: string) {
    return this.diariesService.getStatisticUser(+id);
  }

  @ApiOperation({ summary: 'Обновить данные статистики пользователя' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Put('/data/:id')
  updateStatisticUser(@Param('id') id: string, @Body() updateStatisticUserDiaryDto: updateStatisticUserDiaryDto) {
    return this.diariesService.update(+id, updateStatisticUserDiaryDto);
  }

  @ApiOperation({ summary: 'Удаление данных статистики пользователя' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Delete('/data/:id')
  removeStatisticUser(@Param('id') id: string) {
    return this.diariesService.removeStatisticUser(+id);
  }

  @ApiOperation({ summary: 'Добавить стикер' })
  @ApiResponse({ status: 200 })
  @Post('add_sticker')
  addStikerToUser(@Body() addStikerToUserDiaryDto: addStikerToUserDiaryDto) {
    return this.diariesService.addStikerToUser(addStikerToUserDiaryDto);
  }

  @ApiOperation({ summary: 'Добавить награду' })
  @ApiResponse({ status: 200 })
  @Post('add_reward')
  addRewardToUser(@Body() addRewardToUserDiaryDto: addRewardToUserDiaryDto) {
    return this.diariesService.addRewardToUser(addRewardToUserDiaryDto);
  }
}
