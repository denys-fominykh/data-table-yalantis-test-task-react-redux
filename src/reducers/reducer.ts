const initialState = {
  users: [],
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
