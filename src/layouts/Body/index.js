import React, { useState } from 'react';
import Track from '../../components/Track';

export const Body = ({ tracks }) => {
  const [selected, setSelected] = useState([]);

  const handleTrackSelect = (track) => {
    const index = selected.findIndex((selected) => selected.uri === track.uri);
    console.log(track);
    if (index === -1) {
      setSelected([track, ...selected]);
    } else {
      const newSelected = selected.filter((selected) => selected.uri !== track.uri);
      setSelected(newSelected);
    }
  };

  const isSelected = (track) => {
    const index = selected.findIndex((selected) => selected.uri === track.uri);
    if (index === -1) {
      return false;
    }
    return true;
  };
  return (
    <div className="body">
      {tracks.map((track) => {
        const data = {
          ...track,
          isSelect: isSelected(track),
        };
        return <Track key={data.uri} imageUrl={data.album.images[0].url} albumName={data.album.name} songTitle={data.name} songArtist={data.artists[0].name} onSelect={() => handleTrackSelect(track)} selectState={data.isSelect} />;
      })}
    </div>
  );
};
