import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/auth-state';
import { authActions } from './action';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: undefined,
  validationErrors: null,
  isLoading: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, function (state) {
      return {
        ...state,
        isLoading: true,
        isSubmitting: true,
        validationErrors: null,
      };
    }),
    on(authActions.registerSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        isSubmitting: false,
        validationErrors: null,
        currentUser: action.currentUser,
      };
    }),
    on(authActions.registerFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        isSubmitting: false,
        validationErrors: action.errors,
      };
    }),
    on(authActions.login, function (state) {
      return {
        ...state,
        isLoading: true,
        isSubmitting: true,
        validationErrors: null,
      };
    }),
    on(authActions.loginSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        isSubmitting: false,
        validationErrors: null,
        currentUser: action.currentUser,
      };
    }),
    on(authActions.loginFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        isSubmitting: false,
        validationErrors: action.errors,
      };
    }),
    on(routerNavigationAction, function (state) {
      return {
        ...state,
        isLoading: false,
        isSubmitting: false,
        validationErrors: null,
      };
    }),
    on(authActions.getCurrentUser, function (state) {
      return {
        ...state,
        isLoading: true,
      };
    }),
    on(authActions.getCurrentUserSuccess, function (state, action) {
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser,
      };
    }),
    on(authActions.getCurrentUserFailure, function (state, action) {
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        validationErrors: action.errors,
      };
    })
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectAuthState,
  selectCurrentUser,
  selectIsLoading,
  selectValidationErrors,
} = authFeature;
