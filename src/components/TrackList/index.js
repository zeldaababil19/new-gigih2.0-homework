import Track from "../Track";

const TrackList = (props) => {
  const { tracks, handleSelectTrack, isSelected } = props;

  return (
    <ul className="track-list">
      {tracks.map((track) => {
        const newTrack = {
          ...track,
          isSelect: isSelected(track),
        };
        const {
          album: {
            images: [{ url }],
            name,
          },
          artists: [{ name: artist }],
          name: title,
          uri,
          isSelect,
        } = newTrack;
        return (
          <Track
            key={uri}
            imageUrl={url}
            albumName={name}
            songTitle={title}
            songArtist={artist}
            onSelect={() => handleSelectTrack(track)}
            selectState={isSelect}
          />
        );
      })}
    </ul>
  );
};

export default TrackList;
