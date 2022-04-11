import { useState, useEffect } from 'react';
import { Body } from '../Body';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (window.location.hash) {
      getAccessToken();
    }
  }, []);

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleSearchSubmit = async (e) => {
    if (searchInput) {
      e.preventDefault();
      console.log('Search!');
      try {
        if (!window.location.hash || !accessToken) {
          alert('Get your access token first.');
          throw new Error('Get your access token first.');
        }
        const fetchOptions = {
          method: 'GET',
          headers: new Headers({
            Authorization: `Bearer ${accessToken}`,
          }),
        };

        const LIMIT = 10;
        const queryTerm = searchInput;
        const api_endpoint = `https://api.spotify.com/v1/search?type=track&q=${queryTerm}&limit=${LIMIT}`;

        const result = await fetch(api_endpoint, fetchOptions).then((response) => response.json());
        if (!result.tracks.items.length) {
          setTracks([]);
          throw new Error('Tracks not found.');
        }
        setTracks(result.tracks.items);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getAccessToken = () => {
    const currentLocation = String(window.location).split('#')[1];
    const params = new URLSearchParams(currentLocation);
    const EXPIRES_IN = params.get('expires_in');
    setTimeout(() => {
      setAccessToken('');
      alert('Your access token is expired. Please get new access token.');
    }, EXPIRES_IN * 1000);
    const ACCESS_TOKEN = params.get('access_token');
    setAccessToken(ACCESS_TOKEN);
  };

  const generateRandomString = (length = 16) => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  };

  const client_id = process.env.REACT_APP_SPOTIFY_SECRET_KEY;
  const redirect_uri = 'http://localhost:3000/';
  const state = generateRandomString(16);
  const scope = 'playlist-modify-private';

  let url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += `&client_id=${encodeURIComponent(client_id)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  url += `&state=${encodeURIComponent(state)}`;

  return (
    <div className="header">
      <label htmlFor="keyword" className="search-label">
        HomeWork Spotify Search
      </label>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input id="keyword" name="keyword" type="text" className="input" onChange={handleSearchChange} value={searchInput} placeholder="Search" required />
      </form>
      <a href={url} className="btn btn-token">
        {!accessToken ? 'Get Access Token' : 'Refresh Access Token'}
      </a>
      <Body tracks={tracks} />
    </div>
  );
};

export default Header;
