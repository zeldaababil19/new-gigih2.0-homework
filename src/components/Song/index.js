import React from 'react';
import { Button } from '../Button';

export default function Song({ src, alt, title, artist }) {
  return (
    <div className="song-info">
      <img src={src} alt={alt} className="album-image" />
      <h1 className="song-title">{title}</h1>
      <h2 className="song-artist">{artist}</h2>
      <Button type="button" value="Select" />
    </div>
  );
}
