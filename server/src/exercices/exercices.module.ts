import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ExercicesService} from './exercices.service';
import {ExercicesController} from './exercices.controller';
import {Exercises} from './entity/Exercises.entity';

@Module({
    imports: [SequelizeModule.forFeature([Exercises])],
    controllers: [ExercicesController],
    providers: [ExercicesService]
})
export class ExercicesModule {
}
