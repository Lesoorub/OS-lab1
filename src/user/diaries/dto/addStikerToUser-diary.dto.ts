import { ApiProperty } from "@nestjs/swagger";

export class addStikerToUserDiaryDto {
    @ApiProperty({ example: 'id_stiker', description: 'Уникальный индетификатор стикера' })
    readonly idStiker: number;
    
    @ApiProperty({ example: 'id_stats', description: 'Уникальный индетификатор статистики' })
    readonly idStats: number;
}
