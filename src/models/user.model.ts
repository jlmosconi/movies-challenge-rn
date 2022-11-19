import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface ApiUser extends FirebaseAuthTypes.User {}
