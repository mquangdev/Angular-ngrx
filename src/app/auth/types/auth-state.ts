import { BackEndError } from 'src/app/shared/types/backend-errors';
import { BaseState } from 'src/app/shared/types/base-state';
import { CurrentUser } from 'src/app/shared/types/current-user';

export interface AuthStateInterface extends BaseState {
  isSubmitting: boolean;
  currentUser: CurrentUser | undefined | null;
}
