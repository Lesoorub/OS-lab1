import { ApiProperty } from "@nestjs/swagger";

export class updateDataUserProfileDto {
    @ApiProperty({ example: 'user@mail.ru', description: 'E-mail' })
    readonly email: string;

    @ApiProperty({ example: 'password', description: 'Пароль' })
    readonly password: string;

    @ApiProperty({ example: 'id_file1', description: 'Номер пользователя' })
    readonly phone: string;
    
}
