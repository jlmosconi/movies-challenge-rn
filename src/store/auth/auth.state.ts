export const AUTH_STATE_NAME = 'auth';

export interface AuthState {
  loading: boolean;
}

export const AuthEmptyState: AuthState = {
  loading: false,
};
