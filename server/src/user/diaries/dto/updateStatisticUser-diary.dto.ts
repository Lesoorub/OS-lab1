import { ApiProperty } from "@nestjs/swagger";

export class updateStatisticUserDiaryDto{
    @ApiProperty({ example: 'date', description: 'Дата' })
    readonly date: string;

    @ApiProperty({ example: 'actual_kcal', description: 'Текущее кол-во каллорий' })
    readonly actualKcal: string;

    @ApiProperty({ example: 'goal_kcal', description: 'Нужное кол-во каллорий' })
    readonly goalKcal: string;

}
