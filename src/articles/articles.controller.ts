import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';

@ApiTags('Модуль работы со статьями')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}


  @ApiOperation({ summary: 'Получить данные статьи' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.articlesService.getOne(+id);
  }

  @ApiOperation({ summary: 'Получить весь список статей' })
  @ApiResponse({ status: 200 })
  @ApiQuery({ name: 'offset', type: 'number', description: 'Смещение',example:0})
  @ApiQuery({ name: 'count', type: 'number', description: 'Количество записей на странице',example:1})
  @Get()
  getAll(
    @Query('offset') offset: number, 
    @Query('count') count:number 
  ) {
    return this.articlesService.getAll();
  }


  @ApiOperation({ summary: 'Обновить данные статьи' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @ApiOperation({ summary: 'Удаление статьи' })
  @ApiResponse({ status: 200 })
  @ApiParam({ name: 'id', type: 'number', description: 'Уникальный идентификатор',example:0})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }

  @ApiOperation({ summary: 'Добавление статьи' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }
}
