import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../services/feed.service';
import { feedActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetFeedResponse } from '../types/get-feed-response';
import { HttpErrorResponse } from '@angular/common/http';

// === Service call ===
export const getGlobalArticlesEffect = createEffect(
  (action$ = inject(Actions), feedService = inject(FeedService)) => {
    return action$.pipe(
      ofType(feedActions.getGlobalArticles),
      switchMap(({ request }) => {
        return feedService.getFeedGlobal(request.page, request.pageSize).pipe(
          map((response: GetFeedResponse) => {
            return feedActions.getGlobalArticlesSuccess({ response });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(feedActions.getGlobalArticlesFailure(err.error));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);
