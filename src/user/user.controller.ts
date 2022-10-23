import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('Модуль работы с пользователями')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
