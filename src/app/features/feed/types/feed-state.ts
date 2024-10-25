import { BaseState } from 'src/app/shared/types/base-state';
import { GetFeedResponse } from './get-feed-response';

export interface FeedState extends BaseState {
  feeds: GetFeedResponse;
  popularTags: string[];
}
