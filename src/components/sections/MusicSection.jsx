import React from "react";
import "./MusicSection.css";

export const MusicSection = () => {
  return (
    <section className="section-grid section-music" id="musica">
      <div className="section-header">
        <p className="eyebrow">Pulso inmediato</p>
        <h2>Música destacada</h2>
        <p className="section-copy">
          Riffs pesados, sintetizadores abrasivos y un groove que no se detiene.
          Selección rápida para ponerte en órbita.
        </p>
      </div>
      <div className="card-grid">
        <article className="card">
          <div className="card-glow" />
          <h3>Single: Fuego Interior</h3>
          <p>Beat industrial y coros explosivos. Ideal para arrancar la noche.</p>
          <button className="pill">Reproducir</button>
        </article>
        <article className="card">
          <div className="card-glow" />
          <h3>EP: Luces Rojas</h3>
          <p>Cuatro pistas que mezclan synthwave y rock alternativo.</p>
          <button className="pill">Escuchar EP</button>
        </article>
        <article className="card">
          <div className="card-glow" />
          <h3>Colaboración</h3>
          <p>Featuring DJ Aurora. Un drop brutal con guitarras distorsionadas.</p>
          <button className="pill">Descubrir</button>
        </article>
      </div>
    </section>
  );
};
