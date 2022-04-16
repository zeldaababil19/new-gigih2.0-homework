/**
 * Generates a random string containing numbers and letters
 * @param {number} length The lenght of the string
 * @returns {string} The generated string
 */
const generateRandomString = (length = 16) => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

/**
 * Generates an authorization url
 * @param {object} params The search parameter object
 * @returns {string} The generated authorization url
 */
const generateAuthUrl = (params) => {
  const searchParams = new URLSearchParams(params);
  return `https://accounts.spotify.com/authorize?${searchParams}`;
};

/**
 * Request authorization by assign authorization url to location
 */
const requestAuth = () => {
  const state = generateRandomString(16);
  localStorage.setItem("spotify_auth_state", state);
  const params = {
    response_type: "token",
    // eslint-disable-next-line no-undef
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    scope: "playlist-modify-private",
    // eslint-disable-next-line no-undef
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    state: state,
  };
  const url = generateAuthUrl(params);
  location.assign(url);
};

export { requestAuth };
