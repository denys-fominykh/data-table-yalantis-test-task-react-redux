import React, { FC } from 'react';
import CSS from 'csstype';

import { UserType } from '../../types/TUser';

interface MonthProps {
  title: string;
  users: UserType[];
  filter: (newUsers?: UserType[]) => void;
}

const Month: FC<MonthProps> = ({ title, users, filter }) => {
  const getColor = (): string => {
    if (users.length <= 2) {
      return '#7B7C7E';
    } else if (users.length >= 3 && users.length <= 6) {
      return '#4587F3';
    } else if (users.length >= 7 && users.length <= 10) {
      return '#119F5B';
    } else if (users.length >= 11) {
      return '#DD4E3F';
    }

    return '#000000';
  };

  const styles: CSS.Properties = {
    backgroundColor: getColor(),
    color: '#FFFFFF',
    border: '1px solid #000000',
    textAlign: 'center',
    width: '8%',
  };

  return (
    <td
      style={styles}
      onMouseEnter={(): void => filter(users)}
      onMouseLeave={(): void => filter()}
    >
      {title}
    </td>
  );
};

export default Month;
