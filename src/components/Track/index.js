import React from 'react';
import data from '../../data';
import Song from '../Song';

export default function Track() {
  const listTrack = data.map((data, id) => <Song key={id} src={data.album.images[0].url} alt={data.album.name} title={data.album.name} artist={data.album.artists[0].name} />);

  return <div className="song-track">{listTrack}</div>;
}
