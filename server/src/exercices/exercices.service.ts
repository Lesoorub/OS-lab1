import {Injectable} from '@nestjs/common';
import {CreateExerciceDto} from './dto/create-exercice.dto';
import {UpdateExerciceDto} from './dto/update-exercice.dto';

import {Exercises} from './entity/Exercises.entity'
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class ExercicesService {
    constructor(
        @InjectModel(Exercises)
        private readonly exercises: typeof Exercises,) {
    }

    create(createExerciceDto: CreateExerciceDto) {
        return this.exercises.create({
            title: createExerciceDto.title,
            description: createExerciceDto.description

        });
    }

    getAll(): Promise<Exercises[]> {
        return Exercises.findAll();
    }

    getOne(id: number) {
        return Exercises.findAll({
            where: {
                id: +id
            }
        })
    }

    update(id: number, updateExerciceDto: UpdateExerciceDto) {
        return `This action updates a #${id} exercice`;
    }

    remove(id: number) {
        return `This action removes a #${id} exercice`;
    }
}
