import { ApiProperty } from "@nestjs/swagger";

export class addRewardToUserDiaryDto {
    @ApiProperty({ example: 'id_user', description: 'Уникальный индетификатор пользователя' })
    readonly idUser: number;
    
    @ApiProperty({ example: 'id_reward', description: 'Уникальный индетификатор награды' })
    readonly idReward: number;
}
