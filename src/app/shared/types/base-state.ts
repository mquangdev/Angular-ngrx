import { BackEndError } from './backend-errors';

export interface BaseState {
  isLoading: boolean;
  validationErrors: BackEndError | null;
}
