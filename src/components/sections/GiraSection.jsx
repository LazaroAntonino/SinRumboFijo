import React from "react";
import "./GiraSection.css";

export const GiraSection = () => {
  return (
    <section className="section-highlight section-gira" id="gira">
      <div className="section-header">
        <p className="eyebrow">Gira 2026</p>
        <h2>Ciudades en llamas</h2>
        <p className="section-copy">
          Siente el directo: salas oscuras, flashes neón y un muro de sonido.
          Asegura tu lugar en primera fila.
        </p>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <span className="dot" />
          <div>
            <h3>Madrid · 14 FEB</h3>
            <p>Teatro Kapital — Sold Out</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="dot" />
          <div>
            <h3>Barcelona · 22 FEB</h3>
            <p>Razzmatazz — Últimas entradas</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="dot" />
          <div>
            <h3>Valencia · 01 MAR</h3>
            <p>La Marina — Open Air</p>
          </div>
        </div>
      </div>
      <a className="wide-cta" href="#entradas">
        Reservar entradas
      </a>
    </section>
  );
};
