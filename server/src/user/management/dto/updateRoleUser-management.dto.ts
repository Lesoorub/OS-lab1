import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "src/enums/UserRole";


export class updateRoleUserManagementDto {
    @ApiProperty({ enum: ['Admin', 'Coacher', 'User'], description: 'Роль пользователя' })
    readonly role: UserRole;

    @ApiProperty({example: 'id_user', description: 'Уникальный индетификатор пользователя' })
    readonly idUser: number;
}
