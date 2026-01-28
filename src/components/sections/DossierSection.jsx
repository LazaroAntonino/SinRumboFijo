import React from "react";
import "./DossierSection.css";

export const DossierSection = () => (
  <section className="dossier-section">
    <h2>Dossier</h2>
    <p>
      Información detallada para prensa y promotores. Descarga nuestro dossier para conocer más sobre la banda, trayectoria y detalles técnicos.
    </p>
    <a className="btn primary" href="/2508%20-%20SinRumboFijo%20-%20Dosier%20-v2.pdf" target="_blank" rel="noopener noreferrer">Descargar dossier PDF</a>
    <div style={{marginTop: '2rem', textAlign: 'center'}}>
      <img src="/images/Sesión Sin Rumbo Fijo_202500280-Editar_300ppp.jpg" alt="Sin Rumbo Fijo dossier" style={{maxWidth: '100%', borderRadius: '10px', boxShadow: '0 2px 16px #f77f00'}} />
    </div>
  </section>
);
