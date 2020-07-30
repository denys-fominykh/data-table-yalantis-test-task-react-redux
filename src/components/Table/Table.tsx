import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { getItems } from '../../services/getUsersService';
import { formatDate } from '../../services/formatDateService';
import { User } from '../../types/TUser';
import Spinner from '../Spinner';

interface TableProps {
  users: User[];
  isLoaded: boolean;
  getItems: () => void;
}

const Table: FC<TableProps> = ({ users, isLoaded, getItems }) => {
  useEffect(() => {
    getItems();
  }, []);

  if (!isLoaded) {
    return <Spinner />;
  }

  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Date of Birthday</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => {
          return (
            <tr key={user.id}>
              <th scope="row">{idx + 1}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{formatDate(user.dob)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: any) => {
  return {
    users: state.users,
    isLoaded: state.isLoaded,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getItems: () => dispatch(getItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
