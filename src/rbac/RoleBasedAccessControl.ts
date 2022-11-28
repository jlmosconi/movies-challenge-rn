import {useAppSelector} from '@hooks';
import {UserRoles} from '@models';

export const IsPreRelease = (): boolean => {
  const {userData} = useAppSelector(state => state.user);

  return userData?.role === UserRoles.PRE_RELEASE;
};

export const CheckPermission = (role: UserRoles): boolean => {
  const {userData} = useAppSelector(state => state.user);

  return userData?.role === role;
};
