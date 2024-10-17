import { createActionGroup, props } from '@ngrx/store';
import { GetFeedRequest } from '../types/get-feed-request';
import { GetFeedResponse } from '../types/get-feed-response';
import { BackEndError } from 'src/app/shared/types/backend-errors';

export const feedActions = createActionGroup({
  source: 'Feed',
  events: {
    'Get global articles': props<{ request: GetFeedRequest }>(),
    'Get global articles Success': props<{ response: GetFeedResponse }>(),
    'Get global articles Failure': props<{ errors: BackEndError }>(),
  },
});
