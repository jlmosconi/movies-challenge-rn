import {useAppSelector} from '@hooks';
import {UserRoles, UserRoleType} from '@models';

export const IsPreRelease = (): boolean => {
  const {userData} = useAppSelector(state => state.user);

  return userData?.role === UserRoles.PRE_RELEASE;
};

export const CheckPermission = (role: UserRoleType): boolean => {
  const {userData} = useAppSelector(state => state.user);

  return userData?.role === role;
};
