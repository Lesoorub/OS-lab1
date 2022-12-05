import { Injectable, Inject } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from './entities/auth.entity';
import { USERS } from './auth.providers';

const phoneValidator : RegExp = /^(?:\+\d{1,3})?(?:\d{9})$/
const emailValidator : RegExp = /^(.+)@(.+)$/

@Injectable()
export class AuthService {

  constructor(
    @Inject(USERS)
    private Users: typeof User
  ) {}

  async login(LoginAuthDto: LoginAuthDto) {
    let user = await this.Users.findOne<User>({
      where: {
        email: LoginAuthDto.email,
        password: LoginAuthDto.password,
      }
    })

    if (user != null)
      {
        return { status: "OK" }
      }
      else 
      {
        return { status: "Incorrect login or password" };
      }
  }

  async register(RegisterAuthDto: RegisterAuthDto) {
    if (RegisterAuthDto.name.length < 3)
      return { status: "name is not valid" }
    
    const phone = RegisterAuthDto.mobile.replace(/[^\d\+]+/g, '');
    
    if (!phoneValidator.test(phone))
      return { status: "mobile is not valid" }

    if (!emailValidator.test(RegisterAuthDto.email))
      return { status: "email is not valid" }

    if (RegisterAuthDto.password.length < 3)
      return { status: "password is not valid"}
  

    const [ user, created ] = await this.Users.findOrCreate<User>({
      where: { phone: phone },
      defaults: {
        name: RegisterAuthDto.name,
        mobile: phone,
        password: RegisterAuthDto.password,
        email: RegisterAuthDto.email
      }
    });
    if (created) {
      return { status: "OK" }
    }
    return { status: "Phone already exists" }
  }
}
