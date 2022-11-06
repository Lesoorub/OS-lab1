import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserProviders } from './auth.providers';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ...UserProviders]
})
export class AuthModule {}
