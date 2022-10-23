import { Injectable } from '@nestjs/common';
import { updateDataUserProfileDto } from './dto/updateDataUser-profile.dto';

@Injectable()
export class ProfileService {
  getDataUser(id: number) {
    return `This action returns a #${id} profile`;
  }

  updateDataUser(id: number, updateDataUserProfileDto: updateDataUserProfileDto) {
    return `This action updates a #${id} profile`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} profile`;
  }
}
