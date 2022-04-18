// authentication
const authToken = (accessToken) => ({ type: 'auth', payload: accessToken });

export { authToken };
