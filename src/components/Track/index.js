const Track = (props) => {
  const { imageUrl, albumName, songTitle, songArtist, onSelect, selectState } = props;

  return (
    <div className="song-info">
      <img src={imageUrl} alt={albumName} className="album-image" />
      <h2 className="song-title">{songTitle}</h2>
      <h3 className="song-artist">{songArtist}</h3>
      <button className="btn btn-song" onClick={onSelect}>
        {selectState ? 'Deselect' : 'Select'}
      </button>
    </div>
  );
};

export default Track;
