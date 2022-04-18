// spotify base url
const BASE_SPOTIFY_API_URL = 'https://api.spotify.com/v1';

// get user profile
const getUser = async (accessToken) => {
  try {
    const fetchOptions = {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    };
    const user = await fetch(`${BASE_SPOTIFY_API_URL}/me`, fetchOptions).then((response) => response.json());
    return user;
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

// search for tracks
const searchTracks = async ({ accessToken, query, LIMIT = 10 }) => {
  const params = new URLSearchParams({
    type: 'track',
    q: query,
    limit: LIMIT,
  });
  const fetchOptions = {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  };
  const response = await fetch(`${BASE_SPOTIFY_API_URL}/search?${params}`, fetchOptions).then((response) => response.json());

  return response.tracks.items;
};

// create playlist
const postPlaylist = async ({ userId, playlist, accessToken }) => {
  try {
    const data = {
      name: playlist.title,
      description: playlist.description,
      public: false,
      collaborative: false,
    };
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(data),
    }).then((response) => response.json());
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

// add tracks to playlist
const postItemsToPlaylist = async ({ playlistId, selectedTracks, accessToken }) => {
  try {
    const data = {
      uris: selectedTracks.map((track) => track.uri),
    };
    const fetchOptions = {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
      position: 0,
    };
    const response = await fetch(`${BASE_SPOTIFY_API_URL}/playlists/${playlistId}/tracks`, fetchOptions).then((response) => response.json());
    console.log(response);

    const isSuccess = response['snapshot_id'];

    if (isSuccess) {
      alert('Playlist successfully created.');
      return;
    }

    if (response.error) {
      alert(response.error.message);
    }

    return response;
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

export { getUser, searchTracks, postPlaylist, postItemsToPlaylist };
