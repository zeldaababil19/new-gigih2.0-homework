// generate random string
const generateRandomString = (length = 16) => {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

// generate auth url
const generateAuthUrl = (params) => {
  const searchParams = new URLSearchParams(params);
  return `https://accounts.spotify.com/authorize?${searchParams}`;
};

// requestAuth
const requestAuth = () => {
  const state = generateRandomString(16);
  localStorage.setItem('spotify_auth_state', state);
  const params = {
    response_type: 'token',
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    scope: 'playlist-modify-private',
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    state: state,
  };
  const url = generateAuthUrl(params);
  window.location.assign(url);
};

export { requestAuth };
