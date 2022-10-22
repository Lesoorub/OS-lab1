import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  login(LoginAuthDto: LoginAuthDto) {
    return 'This action adds a new auth';
  }

  register(RegisterAuthDto: RegisterAuthDto) {
    return 'This action adds a new auth';
  }
}
