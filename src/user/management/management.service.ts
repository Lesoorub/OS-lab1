import { Injectable } from '@nestjs/common';
import { addUserCoacherManagementDto } from './dto/addUserCoach-management.dto';
import { updateRoleUserManagementDto } from './dto/updateRoleUser-management.dto';

@Injectable()
export class ManagementService {
  addUserCoach(addUserCoacherManagementDto: addUserCoacherManagementDto) {
    return 'This action addUserCoach a management';
  }

  updateRoleUser(updateRoleUserManagementDto: updateRoleUserManagementDto) {
    return `This action updateRoleUser a management`;
  }

}
