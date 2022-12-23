import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config/dist/config.module';
import {SequelizeModule} from '@nestjs/sequelize';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {UserModule} from './user/user.module';
import {StorageModule} from './storage/storage.module';
import {ArticlesModule} from './articles/articles.module';
import {ExercicesModule} from './exercices/exercices.module';
import {FoodModule} from './food/food.module';
import {StickersModule} from './stickers/stickers.module';
import {RewardsModule} from './rewards/rewards.module';
import {AuthModule} from './auth/auth.module';
import {Exercises} from './exercices/entity/Exercises.entity'

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),

        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_DB,
            models: [Exercises],
            autoLoadModels: true,
            synchronize: true,
            logging: true //Для отображения запросов в консоли
        }),

        AuthModule,

        UserModule,

        StorageModule,

        ArticlesModule,

        ExercicesModule,

        FoodModule,

        StickersModule,

        RewardsModule,

        UsersModule,
    ],
})
export class AppModule {
}
