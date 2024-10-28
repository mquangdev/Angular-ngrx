import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../services/feed.service';
import { feedActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetFeedResponse } from '../types/get-feed-response';
import { HttpErrorResponse } from '@angular/common/http';
import { TagPopularService } from '../services/tag-popular.service';
import { PopularTagResponse } from '../types/popular-tag-response';

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

export const getYourFeedsEffect = createEffect(
  (action$ = inject(Actions), feedService = inject(FeedService)) => {
    return action$.pipe(
      ofType(feedActions.getYourFeeds),
      switchMap(({ request }) => {
        return feedService.getYourFeed(request.page, request.pageSize).pipe(
          map((response: GetFeedResponse) => {
            return feedActions.getYourFeedsSuccess({ response });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(feedActions.getYourFeedsFailure(err.error));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const getFeedByTagEffect = createEffect(
  (action$ = inject(Actions), feedService = inject(FeedService)) => {
    return action$.pipe(
      ofType(feedActions.getFeedByTag),
      switchMap(({ request }) => {
        return feedService
          .getFeedGlobal(request.page, request.pageSize, request.tagName)
          .pipe(
            map((response: GetFeedResponse) => {
              return feedActions.getFeedByTagSuccess({ response });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(feedActions.getFeedByTagFailure(err.error));
            })
          );
      })
    );
  },
  {
    functional: true,
  }
);

export const getPopularTagsEffect = createEffect(
  (
    action$ = inject(Actions),
    popularTagsService = inject(TagPopularService)
  ) => {
    return action$.pipe(
      ofType(feedActions.getPopularTags),
      switchMap(() => {
        return popularTagsService.getAll().pipe(
          map((response: PopularTagResponse) => {
            return feedActions.getPopularTagsSuccess({ response });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(feedActions.getPopularTagsFailure(err.error));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);
