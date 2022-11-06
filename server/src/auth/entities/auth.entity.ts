import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

export class Auth {}

@Table
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    role: number;
  
    @Column
    name: string;
  
    @Column
    email: string;

    @Column
    phone: string;

    @Column
    password: string;
}
