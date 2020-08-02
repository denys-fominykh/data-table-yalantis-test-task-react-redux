import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getItems } from '../../services/getUsersService';
import { UserType } from '../../types/TUser';
import { StateType } from '../../types/TState';
import Spinner from '../Spinner';
import MonthsList from '../MonthsList';
import UsersList from '../UsersList';

interface TableProps {
  users: UserType[];
  months: string[];
  isLoaded: boolean;
  getItems: () => void;
}

const Table: FC<TableProps> = ({ users, months, isLoaded, getItems }) => {
  const [monthUsers, setMonthUsers] = useState<UserType[]>(users);

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    setMonthUsers(users);
  }, [users]);

  const usersFilter = (newUsers?: UserType[]): void => {
    if (newUsers) {
      setMonthUsers(newUsers);
    } else {
      setMonthUsers(users);
    }
  };

  if (!isLoaded) {
    return <Spinner />;
  }

  return (
    <>
      <MonthsList months={months} users={users} filter={usersFilter} />
      <UsersList users={monthUsers} />
    </>
  );
};

const mapStateToProps = (state: StateType): StateType => {
  return {
    users: state.users,
    months: state.months,
    isLoaded: state.isLoaded,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getItems: () => dispatch(getItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
