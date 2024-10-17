import { Feed } from './feed';

export interface GetFeedResponse {
  articles: Feed[];
  articlesCount: number;
}
