import { LoginRequest } from './../types/login-request';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BackEndError } from 'src/app/shared/types/backend-errors';
import { CurrentUser } from 'src/app/shared/types/current-user';
import { RegisterRequest } from '../types/register-request';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ request: RegisterRequest }>(),
    'Register Success': props<{ currentUser: CurrentUser }>(),
    'Register Failure': props<{ errors: BackEndError }>(),
    Login: props<{ request: LoginRequest }>(),
    'Login Success': props<{ currentUser: CurrentUser }>(),
    'Login Failure': props<{ errors: BackEndError }>(),
    'Get current user': emptyProps(),
    'Get current user Success': props<{ currentUser: CurrentUser }>(),
    'Get current user Failure': props<{ errors: BackEndError }>(),
  },
});
