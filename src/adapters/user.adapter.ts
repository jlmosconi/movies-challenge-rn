import {User, ApiUser} from '@models';

export const UserAdapter = (user: ApiUser): User => {
  return {
    uid: user.uid,
    email: user.email || '',
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
    role: user.role || 'release',
  };
};
