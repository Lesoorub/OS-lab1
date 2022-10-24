import { ApiProperty } from "@nestjs/swagger";

export class LoginAuthDto {  
    @ApiProperty({ example: 'user@mail.ru', description: 'E-mail' })
    readonly email: string;
  
    @ApiProperty({ example: 'password', description: 'Пароль' })
    readonly password: string;
}
