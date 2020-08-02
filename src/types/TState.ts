import { UserType } from './TUser';

export type StateType = {
  users: UserType[] | [];
  months: string[];
  isLoaded: boolean;
};
