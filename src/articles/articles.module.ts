import { Module } from '@nestjs/common';
import { ArticlesService } from '@/articles/articles.service';
import { ArticlesController } from '@/articles/articles.controller';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
