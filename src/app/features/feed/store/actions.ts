import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetFeedRequest } from '../types/get-feed-request';
import { GetFeedResponse } from '../types/get-feed-response';
import { BackEndError } from 'src/app/shared/types/backend-errors';
import { PopularTagResponse } from '../types/popular-tag-response';

export const feedActions = createActionGroup({
  source: 'Feed',
  events: {
    'Get global articles': props<{ request: GetFeedRequest }>(),
    'Get global articles Success': props<{ response: GetFeedResponse }>(),
    'Get global articles Failure': props<{ errors: BackEndError }>(),
    'Get your feeds': props<{ request: GetFeedRequest }>(),
    'Get your feeds Success': props<{ response: GetFeedResponse }>(),
    'Get your feeds Failure': props<{ errors: BackEndError }>(),
    'Get popular tags': emptyProps(),
    'Get popular tags Success': props<{ response: PopularTagResponse }>(),
    'Get popular tags Failure': props<{ errors: BackEndError }>(),
    'Set Tag Selected': props<{ tag: string }>(),
    'Get feed by tag': props<{ request: GetFeedRequest }>(),
    'Get feed by tag Success': props<{ response: GetFeedResponse }>(),
    'Get feed by tag Failure': props<{ errors: BackEndError }>(),
  },
});
