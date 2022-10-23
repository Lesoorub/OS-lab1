import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
  @ApiProperty({ example: ['id_file1','id_file1','id_file3',], description: 'Уникальный индетификатор файла' })
  readonly idFile: number[];

  @ApiProperty({ example: 'Why Movement Is Better For Healing Than Bed Rest', description: 'Заголовок' })
  readonly title: string;

  @ApiProperty({ example: 'Forget rest: Movement is the way to heal and thrive post-injury, post-surgery ' +
'and during chronic pain. As someone who lives with chronic pain, I know this...', description: 'Текст статьи' })
  readonly text: string;

}
