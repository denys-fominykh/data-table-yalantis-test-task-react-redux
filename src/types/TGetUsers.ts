import { UserType } from './TUser';

export type GetUsers = {
  type: string;
  payload: UserType[];
};
