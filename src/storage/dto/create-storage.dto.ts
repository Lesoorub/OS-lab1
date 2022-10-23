import { ApiProperty } from "@nestjs/swagger";

export class CreateStorageDto {
    @ApiProperty({ example: '1', description: 'Размер файла' })
    readonly size: number;
  
    @ApiProperty({ example: 'application/msword', description: 'Медиа тип' })
    readonly mite_type: string;

    @ApiProperty({ example: 'DOC-EXAMPLE-BUCKET', description: 'Для хранения' })
    readonly bucket: string;
}
