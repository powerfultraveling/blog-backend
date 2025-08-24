import { Injectable } from '@nestjs/common';
import { ArticleDto } from '@/articles/dto/article.dto';
import { CreateArticleDto } from '@/articles/dto/create-article.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ArticlesService {
  articles: ArticleDto[] = [
    {
      id: '1',
      title: 'Article 1',
      subtitle: 'Subtitle 1',
      description: 'Description 1',
      content: 'Content 1',
      slug: 'article-1',
      isPublished: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Article 2',
      subtitle: 'Subtitle 2',
      description: 'Description 2',
      content: 'Content 2',
      slug: 'article-2',
      isPublished: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getAll(): ArticleDto[] {
    return this.articles;
  }

  getOne(id: string): ArticleDto | undefined {
    return this.articles.find((article) => article.id === id);
  }

  create(createArticleDto: CreateArticleDto) {
    const article: ArticleDto = {
      id: uuidv4(),
      ...createArticleDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.articles.push(article);

    return this.articles;
  }

  update(id: string, updatedArticle: ArticleDto) {
    this.articles = this.articles.map((article) => {
      if (article.id === id) {
        return { ...article, ...updatedArticle };
      }

      return article;
    });

    return this.articles;
  }

  delete(id: string) {
    this.articles = this.articles.filter((article) => article.id !== id);

    return this.articles;
  }
}
