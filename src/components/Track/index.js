import React from 'react';
import Song from '../Song';

export default function Track({ tracks }) {
  const isEmpty = (tracks) => {
    return tracks.lenght > 0;
  };

  const listTrack = tracks.map((data, id) => <Song key={id} src={data.album.images[0].url} alt={data.album.name} title={data.album.name} artist={data.album.artists[0].name} />);

  return <div className="song-track">{listTrack}</div>;
}
