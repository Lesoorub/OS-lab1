import { Injectable } from '@nestjs/common';
import { addRewardToUserDiaryDto } from './dto/addRewardToUser-diary.dto';
import { addStikerToUserDiaryDto } from './dto/addStikerToUser-diary.dto';
import { updateStatisticUserDiaryDto } from './dto/updateStatisticUser-diary.dto';

@Injectable()
export class DiariesService {
  getStatisticUser(id: number) {
    return `This action returns a #${id} diary`;
  }

  update(id: number, updateStatisticUserDiaryDto: updateStatisticUserDiaryDto) {
    return `This action updates a #${id} diary`;
  }

  removeStatisticUser(id: number) {
    return `This action removes a #${id} diary`;
  }
  
  addStikerToUser(addStikerToUserDiaryDto: addStikerToUserDiaryDto) {
    return 'This action addStikerToUser a diary';
  }

  addRewardToUser(addRewardToUserDiaryDto: addRewardToUserDiaryDto) {
    return 'This action addRewardToUser a diary';
  }
}
