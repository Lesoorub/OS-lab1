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

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),

        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASS,
            database: process.env.POSTGRES_DB,
            models: [],
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
