import { ApiProperty } from "@nestjs/swagger";

export class CreateStickerDto {
    @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
    readonly userid: number;

    @ApiProperty({ example: '1', description: 'Идентификатор файла' })
    readonly fileid: number;
    
    @ApiProperty({ example: 'name', description: 'Название' })
    readonly name: string;
}
