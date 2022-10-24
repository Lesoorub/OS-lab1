import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ManagementService } from './management.service';
import { addUserCoacherManagementDto } from './dto/addUserCoach-management.dto';
import { updateRoleUserManagementDto } from './dto/updateRoleUser-management.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Пользователи: Модуль работы с пользователями ')
@Controller('user/management')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) {}
  @ApiOperation({ summary: 'Добавить пользователя к наставнику' })
  @ApiResponse({ status: 200 })
  @Post()
  addUserCoach(@Body() addUserCoacherManagementDto: addUserCoacherManagementDto) {
    return this.managementService.addUserCoach(addUserCoacherManagementDto);
  }
  
  @ApiOperation({ summary: 'Изменяет роль пользователя' })
  @ApiResponse({ status: 200 })
  @Put('role')
  updateRoleUser(@Body() updateRoleUserManagementDto: updateRoleUserManagementDto) {
    return this.managementService.updateRoleUser(updateRoleUserManagementDto);
  }

}
