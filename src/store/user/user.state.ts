import {UserApp} from '@models';

export const USER_STATE_NAME = 'user';

export interface UserState {
  userData: UserApp | undefined;
}

export const UserEmptyState: UserState = {
  userData: {
    createdAt: 0,
    currentTrip: null,
    cityName: '',
    hasIncompleteTrip: false,
    hasTripWaiting: false,
    photoURL: null,
    photoURLSm: null,
    displayName: '',
    firstName: '',
    lastName: '',
    rating: {
      count: 0,
      stars: 0,
      value: 0,
    },
    shareApp: false,
    uid: '',
  },
};
