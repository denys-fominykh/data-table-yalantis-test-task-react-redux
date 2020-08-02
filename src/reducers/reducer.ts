import { StateType } from '../types/TState';

const initialState: StateType = {
  users: [],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  isLoaded: false,
};

const reducer = (state: StateType = initialState, action: any): StateType => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
