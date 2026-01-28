import React from "react";
import "./MerchSection.css";

export const MerchSection = () => (
  <section className="section-highlight section-merch">
    <div className="section-header">
      <h2 style={{fontSize: '2.7rem', color: 'var(--neon-orange)', textShadow: '0 0 10px #f77f00, 0 0 2px #f77f00'}}>MERCHANDISING</h2>
      <div style={{margin: '2.5rem 0 1.5rem 0'}}>
        <span style={{fontSize: '7rem', fontWeight: 900, color: 'var(--neon-orange)', textShadow: '0 0 8px #f77f00, 0 0 2px #f77f00, 0 0 0px #f77f00'}}>404</span>
      </div>
      <p style={{fontSize: '4rem', color: 'var(--white)', fontWeight: 900, textShadow: '0 0 2px #f77f00', marginBottom: '0.5rem'}}>¡Ups!</p>
      <p style={{fontSize: '2rem', color: 'var(--white)', fontWeight: 700, textShadow: '0 0 2px #f77f00'}}>El merch está en camino... aunque sin rumbo fijo</p>
    </div>
  </section>
);
