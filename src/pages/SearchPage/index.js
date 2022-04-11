import React, { Component } from 'react';
import Track from '../../components/Track';

export default class SearchPage extends Component {
  state = { access_token: '', searchInput: '', searchResult: [] };

  getTrack = async (e) => {
    const baseUrl = String(window.location).split('#')[1];
    const params = new URLSearchParams(baseUrl);
    let ACCESS_TOKEN = params.get('access_token');
    this.setState({ access_token: ACCESS_TOKEN });

    const fetchOptions = {
      methos: 'GET',
      Headers: new Headers({
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      }),
    };

    const LIMIT = 10;
    const queryTerm = this.state.searchInput;
    let endpoint = `https://api.spotify.com/v1/search?type=track&q=${queryTerm}&limit=${LIMIT}`;

    const result = await fetch(endpoint, fetchOptions).then((response) => response.json());
    this.setState({ searchResult: result.tracks.items });
  };

  handleInput = (e) => this.setState({ searchInput: e.target.value });

  render() {
    const client_id = process.env.REACT_APP_SPOTIFY_SECRET_KEY;
    const redirect_uri = 'http://localhost:3000/';

    const generateRandomString = (length = 16) => {
      // Declare all characters
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      // Pick characters randomly
      let str = '';
      for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      return str;
    };

    const state = generateRandomString(16);

    const scope = 'playlist-modify-private';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += `&client_id=${encodeURIComponent(client_id)}`;
    url += `&scope=${encodeURIComponent(scope)}`;
    url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    url += `&state=${encodeURIComponent(state)}`;

    return (
      <div className="search-bar">
        <input type="text" onChange={this.handleInput} value={this.state.searchInput} className="input" required />
        <button type="submit" onClick={this.getSongs} className="btn btn--select">
          Search
        </button>
        <a href={url} className="btn">
          Refresh Access
        </a>
        <Track tracks={this.state.searchResult} />
        {console.log(this.state.searchResult)}
      </div>
    );
  }
}
