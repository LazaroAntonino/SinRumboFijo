import React from "react";
import "./NewsSection.css";

export const NewsSection = () => {
  return (
    <section className="news section-news" id="noticias">
      <div className="section-header">
        <p className="eyebrow">Noticias</p>
        <h2>Lo último del grupo</h2>
        <p className="section-copy">
          Mantente al día: lanzamientos, merch y momentos detrás del escenario.
        </p>
      </div>
      <div className="news-grid">
        <article className="news-card">
          <div className="tag">Nuevo</div>
          <h3>Documental en camino</h3>
          <p>Una mirada cruda al proceso creativo y al caos de la gira.</p>
        </article>
        <article className="news-card">
          <div className="tag">Merch</div>
          <h3>Drop cápsula</h3>
          <p>Sudaderas reflectantes y vinilos edición limitada.</p>
        </article>
        <article className="news-card">
          <div className="tag">Studio</div>
          <h3>Sesión nocturna</h3>
          <p>Grabando con sintetizadores modulares y una cinta de 8 pistas.</p>
        </article>
      </div>
    </section>
  );
};
