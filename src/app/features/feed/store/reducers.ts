import { createFeature, createReducer, on } from '@ngrx/store';
import { FeedState } from '../types/feed-state';
import { feedActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: FeedState = {
  feeds: {
    articles: [],
    articlesCount: 0,
  },
  isLoading: false,
  validationErrors: null,
  popularTags: [],
  tagSelected: null,
};

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getGlobalArticles, function (state) {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(feedActions.getGlobalArticlesSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        feeds: action.response,
      };
    }),
    on(feedActions.getGlobalArticlesFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        validationErrors: action.errors,
      };
    }),
    on(feedActions.getFeedByTag, function (state) {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(feedActions.getFeedByTagSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        feeds: action.response,
      };
    }),
    on(feedActions.getFeedByTagFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        validationErrors: action.errors,
      };
    }),
    on(feedActions.getPopularTags, function (state) {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(feedActions.getPopularTagsSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        popularTags: action.response.tags,
      };
    }),
    on(feedActions.getPopularTagsFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        validationErrors: action.errors,
      };
    }),
    on(feedActions.getYourFeeds, function (state) {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(feedActions.getYourFeedsSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        feeds: action.response,
      };
    }),
    on(feedActions.getYourFeedsFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        validationErrors: action.errors,
      };
    }),
    on(feedActions.setTagSelected, (state, action) => {
      return {
        ...state,
        tagSelected: action.tag,
      };
    }),
    on(routerNavigationAction, (state) => {
      let popularTagsCache = state.popularTags;
      return {
        ...initialState,
        popularTags: popularTagsCache,
      };
    })
  ),
});

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  selectValidationErrors,
  selectFeeds,
  selectPopularTags,
  selectTagSelected,
} = feedFeature;
