/**
 * Base url for Spotify Web API
 */
const BASE_SPOTIFY_API_URL = "https://api.spotify.com/v1";

/**
 * Get detailed profile information about the current user (including the current user's username).
 * @param {string} accessToken access_token for authentication
 * @returns current user's profile
 */
const getUser = async (accessToken) => {
  try {
    const fetchOptions = {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    };
    const user = await fetch(`${BASE_SPOTIFY_API_URL}/me`, fetchOptions).then((response) =>
      response.json()
    );
    return user;
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

/**
 * Get Spotify catalog information about tracks that match a keyword string.
 * @param {object} data data object must contain accessToken, query, and LIMIT
 * @returns object that contain track items
 */
const searchTracks = async ({ accessToken, query, LIMIT = 10 }) => {
  const params = new URLSearchParams({
    type: "track",
    q: query,
    limit: LIMIT,
  });
  const fetchOptions = {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  };
  const response = await fetch(`${BASE_SPOTIFY_API_URL}/search?${params}`, fetchOptions).then(
    (response) => response.json()
  );

  return response.tracks.items;
};

/**
 *  Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)
 * @param {object} data data object must contain userId, playlist, accessToken
 */
const postPlaylist = async ({ userId, playlist, accessToken }) => {
  try {
    const data = {
      name: playlist.title,
      description: playlist.description,
      public: false,
      collaborative: false,
    };
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
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

/**
 *  Add one or more items to a user's playlist.
 * @param {object} data data object must contain playlistId, selectedTracks, accessToken
 */
const postItemsToPlaylist = async ({ playlistId, selectedTracks, accessToken }) => {
  try {
    const data = {
      uris: selectedTracks.map((track) => track.uri),
    };
    const fetchOptions = {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
      position: 0,
    };
    const response = await fetch(
      `${BASE_SPOTIFY_API_URL}/playlists/${playlistId}/tracks`,
      fetchOptions
    ).then((response) => response.json());
    console.log(response);

    const isSuccess = response["snapshot_id"];

    if (isSuccess) {
      alert("Playlist successfully created.");
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
