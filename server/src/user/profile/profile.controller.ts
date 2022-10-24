import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { updateDataUserProfileDto } from './dto/updateDataUser-profile.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Пользователи: Модуль работы с пользовательскими профилями')
@Controller('user/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @ApiOperation({ summary: 'Получить данные пользователя' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Get('/data/:id')
  getDataUser(@Param('id') id: string) {
    return this.profileService.getDataUser(+id);
  }

  @ApiOperation({ summary: 'Обновить данные пользователя' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Put('/data/:id')
  updateDataUser(@Param('id') id: string, @Body() updateDataUserProfileDto:updateDataUserProfileDto) {
    return this.profileService.updateDataUser(+id, updateDataUserProfileDto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.profileService.removeUser(+id);
  }
}
