import {
  Controller,
  Delete,
  Get,
  Post,
  Body,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ArticleDto } from '@/articles/dto/article.dto';
import { ArticlesService } from '@/articles/articles.service';
import { CreateArticleDto } from '@/articles/dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get()
  findAll(): ArticleDto[] {
    return this.articleService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): ArticleDto {
    const article = this.articleService.getOne(id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}
