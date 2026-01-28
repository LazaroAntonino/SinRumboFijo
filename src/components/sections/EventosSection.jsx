import React from "react";
import "./EventosSection.css";

const proximos = [
  { fecha: "15/03/2026", lugar: "Sala El Sol, Madrid" },
  { fecha: "02/04/2026", lugar: "La Riviera, Madrid" },
];
const historicos = [
  { fecha: "10/12/2025", lugar: "Sala Siroco, Madrid" },
  { fecha: "05/11/2025", lugar: "Café La Palma, Madrid" },
];

export const EventosSection = () => (
  <section className="eventos-section">
    <h2>Eventos</h2>
    <div className="eventos-list">
      <h3>Próximos eventos</h3>
      <ul>
        {proximos.map((ev, i) => (
          <li key={i}>
            <span className="fecha">{ev.fecha}</span> - <span className="lugar">{ev.lugar}</span>
          </li>
        ))}
      </ul>
      <h3>Histórico de conciertos</h3>
      <ul>
        {historicos.map((ev, i) => (
          <li key={i}>
            <span className="fecha">{ev.fecha}</span> - <span className="lugar">{ev.lugar}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
