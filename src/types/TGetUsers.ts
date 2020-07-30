import { User } from './TUser';

export type GetUsers = {
  type: string;
  payload: User[];
};
