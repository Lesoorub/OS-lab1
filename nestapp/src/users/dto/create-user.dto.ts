import { ApiProperty } from "@nestjs/swagger";

//Создаём объект dto для обмена данными
export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    readonly email: string;

    @ApiProperty({example: 'password', description: 'Пароль'})
    readonly password: string;
}