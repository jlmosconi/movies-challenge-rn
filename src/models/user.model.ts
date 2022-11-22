import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const enum UserRoles {
  RELEASE = 'release',
  PRE_RELEASE = 'pre-release',
}

export type UserRoleType = `${UserRoles}`;
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: UserRoleType;
}

export interface ApiUser extends FirebaseAuthTypes.User {
  role: UserRoleType;
}
