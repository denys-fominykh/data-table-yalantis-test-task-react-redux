const initialState = {
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

const reducer = (state = initialState, action: any) => {
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
