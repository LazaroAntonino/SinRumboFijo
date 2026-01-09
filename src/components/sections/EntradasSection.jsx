import React from "react";
import "./EntradasSection.css";

export const EntradasSection = () => {
  return (
    <section className="section-highlight section-entradas" id="entradas">
      <div className="section-header">
        <p className="eyebrow">Entradas</p>
        <h2>Reserva tu sitio</h2>
        <p className="section-copy">
          Asegura tu entrada antes de que se agoten. Vive el show en primera fila.
        </p>
      </div>
      <div className="entradas-panel">
        <div className="entradas-card">
          <h3>General</h3>
          <p>Acceso estándar · 30€</p>
          <button className="pill">Comprar</button>
        </div>
        <div className="entradas-card highlight">
          <h3>Front Row</h3>
          <p>Zona preferente + early entry · 55€</p>
          <button className="pill">Comprar</button>
        </div>
        <div className="entradas-card">
          <h3>VIP</h3>
          <p>Meet & greet + merch exclusiva · 95€</p>
          <button className="pill">Comprar</button>
        </div>
      </div>
    </section>
  );
};
