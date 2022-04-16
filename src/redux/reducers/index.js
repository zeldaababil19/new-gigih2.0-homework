const initialState = { accessToken: '' };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth':
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
};

export { appReducer, initialState };
