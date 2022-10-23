import { ApiProperty, PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    
  @ApiProperty({ example: 'userName', description: 'Имя пользователя' })
  readonly name: string;

  @ApiProperty({ example: 'mobile', description: 'Номер телефона' })
  readonly mobile: string;
}
