import {User} from '@models';

export const USER_STATE_NAME = 'user';

export interface UserState {
  userData: User | undefined;
}

export const UserEmptyState: UserState = {
  userData: {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
    role: 'release',
  },
};
