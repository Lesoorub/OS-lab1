import {ApiProperty} from "@nestjs/swagger";

interface ExerciceStep {
    text?: string;
}


export class CreateExerciceDto {
    // @ApiProperty({ example: 'id_file1', description: 'Уникальный индетификатор файла' })
    // readonly idFilePhoto: number;


    @ApiProperty({example: 'Glute bridge', description: 'Заголовок'})
    readonly title: string;


    @ApiProperty({
        example: "The glute bridge effectively works your entire posterior chain, which isn't only good for you, but it will make your booty look perkier as well.",
        description: 'Описание'
    })
    readonly description: string;

    // @ApiProperty({ example: "https://www.youtube.com/watch?v=IP3dx8a-iDA&ab_channeI=MerwinMusic", description: 'Ссылка на видео' })
    // readonly videoText: string;
    //
    // @ApiProperty({ example: [
    //     {text:"Combine milk, cloves, 1/2 teaspoon vanilla, and cinnamon in a saucepan, and heat over lowest setting for 5 minutes Slowly bring milk mixture to a boil."},
    //     {text:"In a large bowl, combine egg yolks and sugar. Whisk together until fluffy. Whisk hot milk mixture slowly into the  ggs. Pour mixture into saucepan. Cook over medium heat, stirring constantly  or 3 minutes, or until thick. Do not allow mixture to boil. Strain to remove cloves, and let cool for about an hour."},
    //     {text:"Stir in rum, cream, 2 teaspoon vanilla, and nutmeg. Refrigerate vernight before serving."}
    // ], description: 'Упражнения' })
    // readonly ExercicesSteps: ExerciceStep[];


}
