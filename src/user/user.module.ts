import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ManagementModule } from './management/management.module';
import { ProfileModule } from './profile/profile.module';
import { DiariesModule } from './diaries/diaries.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ManagementModule, ProfileModule, DiariesModule]
})
export class UserModule {}
