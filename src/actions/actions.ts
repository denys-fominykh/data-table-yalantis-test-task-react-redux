import { UserType } from '../types/TUser';
import { GetUsers } from '../types/TGetUsers';

export const getUsers = (payload: UserType[]): GetUsers => ({
  type: 'GET_USERS',
  payload,
});
