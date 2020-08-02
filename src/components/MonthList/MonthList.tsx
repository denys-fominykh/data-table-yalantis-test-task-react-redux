import React, { FC } from 'react';

import { UserType } from '../../types/TUser';
import Month from '../Month';

interface MonthListProps {
  months: string[];
  users: UserType[];
  filter: (newUsers?: UserType[]) => void;
}

const MonthList: FC<MonthListProps> = ({ months, users, filter }) => {
  const getUserMonth = (users: UserType[], month: number): UserType[] => {
    const usersList = users.filter((user: UserType) => {
      const date: Date = new Date(user.dob);
      return month === date.getMonth();
    });

    return usersList;
  };

  return (
    <table className="table table-sm" style={{ marginBottom: 0 }}>
      <tbody>
        <tr>
          {months.map((month, idx) => {
            return (
              <Month
                key={idx}
                title={month}
                users={getUserMonth(users, idx)}
                filter={filter}
              />
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default MonthList;
