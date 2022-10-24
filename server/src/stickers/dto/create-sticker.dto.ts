import { ApiProperty } from "@nestjs/swagger";

export class CreateStickerDto {
    @ApiProperty({ example: '1', description: 'Идентификатор файла' })
    readonly file_id: number;
    
    @ApiProperty({ example: 'title', description: 'Наименование' })
    readonly title: string;
}
