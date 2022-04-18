// initial state
const initialState = { accessToken: '' };

// reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth':
      return { ...state, accessToken: action.payload };
    default:
      return state;
  }
};

// export reducer, initial state
export { appReducer, initialState };
