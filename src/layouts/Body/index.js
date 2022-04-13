import React from 'react';
import Track from '../../components/Track';

const Body = (props) => {
  return (
    <div className="body">
      {props.tracks.map((track) => {
        const data = {
          ...track,
          isSelect: props.isSelected(track),
        };
        return <Track key={data.uri} imageUrl={data.album.images[0].url} albumName={data.album.name} songTitle={data.name} songArtist={data.artists[0].name} onSelect={() => props.handleSelectTrack(track)} selectState={data.isSelect} />;
      })}
    </div>
  );
};
export default Body;
