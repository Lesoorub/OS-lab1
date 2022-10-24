import { ApiProperty } from "@nestjs/swagger";

export class CreateRewardDto {
    @ApiProperty({ example: '1', description: 'Идентификатор' })
    readonly file_id: number;
    
    @ApiProperty({ example: 'name', description: 'Название награды' })
    readonly name: string;

    @ApiProperty({ example: '1', description: 'Стоимость награды' })
    readonly cost: number;
}
