import React, { FC } from 'react';

import { UserType } from '../../types/TUser';
import User from '../User';

interface UsersListProps {
  users: UserType[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <table className="table table-striped table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Date of Birthday</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => {
          return <User key={idx} user={user} idx={idx} />;
        })}
      </tbody>
    </table>
  );
};

export default UsersList;
