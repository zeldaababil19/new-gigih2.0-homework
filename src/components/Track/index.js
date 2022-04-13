const Track = (props) => {
  return (
    <div className="song-info">
      <img src={props.imageUrl} alt={props.albumName} className="album-image" />
      <h2 className="song-title">{props.songTitle}</h2>
      <h3 className="song-artist">{props.songArtist}</h3>
      <button className="btn btn-song" onClick={props.onSelect}>
        {props.selectState ? 'Deselect' : 'Select'}
      </button>
    </div>
  );
};

export default Track;
