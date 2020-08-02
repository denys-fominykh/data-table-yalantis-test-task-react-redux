import React, { FC } from 'react';

import { UserType } from '../../types/TUser';
import { formatDate } from '../../services/formatDateService';

interface UserProps {
  user: UserType;
  idx: number;
}

const User: FC<UserProps> = ({ user, idx }) => {
  return (
    <tr key={user.id}>
      <th scope="row">{idx + 1}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{formatDate(user.dob)}</td>
    </tr>
  );
};

export default User;
