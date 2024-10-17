import { createFeature, createReducer, on } from '@ngrx/store';
import { FeedState } from '../types/feed-state';
import { feedActions } from './actions';

const initialState: FeedState = {
  globalArticles: {
    articles: [],
    articlesCount: 0,
  },
  isLoading: false,
  validationErrors: null,
};

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getGlobalArticles, function (state) {
      return {
        ...state,
        isLoading: true,
        validationErrors: null,
      };
    }),
    on(feedActions.getGlobalArticlesSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        validationErrors: null,
        globalArticles: action.response,
      };
    }),
    on(feedActions.getGlobalArticlesFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        validationErrors: action.errors,
      };
    })
  ),
});

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  selectValidationErrors,
} = feedFeature;
