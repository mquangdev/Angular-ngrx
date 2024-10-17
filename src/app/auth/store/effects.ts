import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CurrentUser } from 'src/app/shared/types/current-user';
import { AuthService } from '../services/auth.service';
import { authActions } from './action';
import { HttpErrorResponse } from '@angular/common/http';
import { KEY_STORAGE } from 'src/app/shared/consts/storage';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';

// === Service call ===
export const registerEffect = createEffect(
  (
    action$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            persistanceService.set(KEY_STORAGE.accessToken, currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(authActions.registerFailure(err.error));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const loginEffect = createEffect(
  (
    action$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return action$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: CurrentUser) => {
            persistanceService.set(KEY_STORAGE.accessToken, currentUser.token);
            return authActions.loginSuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(authActions.loginFailure(err.error));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const getCurrentUserEffect = createEffect(
  (
    action$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return action$.pipe(
      ofType(authActions.getCurrentUser),
      switchMap(() => {
        if (!persistanceService.get(KEY_STORAGE.accessToken)) {
          return of(authActions.getCurrentUserFailure({ errors: {} }));
        }
        return authService.getCurrentUser().pipe(
          map((currentUser: CurrentUser) => {
            return authActions.getCurrentUserSuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(authActions.getCurrentUserFailure(err.error));
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

// === End service call ===

export const redirectAfterRegisterEffect = createEffect(
  (action$ = inject(Actions), router = inject(Router)) => {
    return action$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);

export const redirectAfterLoginEffect = createEffect(
  (action$ = inject(Actions), router = inject(Router)) => {
    return action$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);
