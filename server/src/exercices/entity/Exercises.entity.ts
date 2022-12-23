import {Column, Model, Table} from 'sequelize-typescript';

@Table
export class Exercises extends Model {
    @Column
    title: string;

    @Column
    description: string;
}