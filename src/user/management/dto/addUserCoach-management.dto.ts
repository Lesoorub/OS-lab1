import { ApiProperty } from "@nestjs/swagger";

export class addUserCoacherManagementDto {
    @ApiProperty({ example: 'id_coach', description: 'Уникальный индетификатор наставника' })
    readonly idCoach: number;

    @ApiProperty({ example: 'id_user', description: 'Уникальный индетификатор пользователя' })
    readonly idUser: number;


}
