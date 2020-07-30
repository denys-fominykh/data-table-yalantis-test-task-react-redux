import { User } from '../types/TUser';
import { GetUsers } from '../types/TGetUsers';

export const getUsers = (payload: User[]): GetUsers => ({
  type: 'GET_USERS',
  payload,
});
