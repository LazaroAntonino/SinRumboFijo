import React from "react";
import "./GiraSection.css";

const proximos = [
  {
    lugar: "¡Próximo concierto!",
    fecha: "¡No sabemos cuándo, pero seguro que será épico!",
    logo: true
  },
];
const historicos = [
  { lugar: "Madrid · 29 JUL", fecha: "Tres Cantos — Fiestas de Tres Cantos" },
  { lugar: "Madrid · 21 DIC · Majadahonda", fecha: "Sala Rey Louie" },
];

export const GiraSection = () => {
  return (
    <section className="section-highlight section-gira" id="gira">
      <div className="section-header">
        {/* <p className="eyebrow">Gira 2026</p> */}
        <h2>Noches épicas, historias inolvidables</h2>
        {/*
        <p className="section-copy">
          Siente el directo: salas oscuras, flashes neón y un muro de sonido.
          Asegura tu lugar en primera fila.
        </p>
        */}
      </div>
      {/* Timeline principal eliminada, ahora los eventos se muestran en las secciones de próximos/histórico */}
      <div className="eventos-list">
        <h3>Próximos conciertos</h3>
        <div className="timeline">
          <div className="timeline-item" style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <h3 style={{ textAlign: 'center' }}>{proximos[0].lugar}</h3>
              <p style={{ textAlign: 'center', marginBottom: '1rem' }}>{proximos[0].fecha}</p>
              <img src="/public/images/Logo2_Front.png" alt="Logo Sin Rumbo Fijo" style={{ width: '80px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #eee', display: 'block', margin: '0 auto' }} />
            </div>
          </div>
        </div>
        <h3>Histórico de conciertos</h3>
        <div className="timeline">
          {historicos.length === 0 ? (
            <p style={{color: 'var(--muted)'}}>Aún no hay conciertos en el histórico.</p>
          ) : (
            historicos.map((ev, i) => (
              <div className="timeline-item" key={i}>
                <span className="dot" />
                <div>
                  <h3>{ev.lugar}</h3>
                  <p>{ev.fecha}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
