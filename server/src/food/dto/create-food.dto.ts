import { ApiProperty } from "@nestjs/swagger";

export class CreateFoodDto {
    @ApiProperty({ example: 'name_food', description: 'Название' })
    readonly name: string;

    @ApiProperty({ example: '1', description: 'Вес' })
    readonly weight: number;
    
    @ApiProperty({ example: '1', description: 'Количество' })
    readonly count: number;
 
    @ApiProperty({ example: '1', description: 'Жиры' })
    readonly fat: number;

    @ApiProperty({ example: '1', description: 'Белки' })
    readonly protein: number;

    @ApiProperty({ example: '1', description: 'Углеводы' })
    readonly carbohyd: number;

    @ApiProperty({ example: '1', description: 'Калории' })
    readonly kcal: number;
}
