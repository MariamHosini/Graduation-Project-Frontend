import { IAuthor } from './iauthor';
import { IComment } from './icomment';

export interface IPost {
  BlogPostId: number;
  title: string;
  content: string;
  FeaturedImageUrl: string;
  CreatedAt: Date;
  Author: IAuthor;
  CategoryNames: string[];
  Comments: IComment[];
}
