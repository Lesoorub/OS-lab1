import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { StorageModule } from './storage/storage.module';
import { ArticlesModule } from './articles/articles.module';
import { ExercicesModule } from './exercices/exercices.module';
import { FoodModule } from './food/food.module';
import { StickersModule } from './stickers/stickers.module';
import { RewardsModule } from './rewards/rewards.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    
    /*
    //БД Временно отключена
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_DB,
      models: [User],
      autoLoadModels: true,
    }),
    */
    UsersModule,
    
    AuthModule,
    
    UserModule,
    
    StorageModule,
    
    ArticlesModule,
    
    ExercicesModule,
    
    FoodModule,
    
    StickersModule,
    
    RewardsModule,
  ],
})
export class AppModule {}
