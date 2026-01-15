import React from "react";
import "./SpotifyPlayer.css";

export const SpotifyPlayer = () => {
  return (
    <div className="spotify-player-container">
      <div className="spotify-header">
        <p className="eyebrow">Escúchanos en Spotify</p>
        <h2>Nuestra Música</h2>
      </div>
      <div className="spotify-embed">
        <iframe
          src="https://open.spotify.com/embed/artist/6oA9yOYKAPLPXk1t2gr2Mr?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player - Sin Rumbo Fijo"
        />
      </div>
    </div>
  );
};
