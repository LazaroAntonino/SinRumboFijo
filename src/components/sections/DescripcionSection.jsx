import React, { useState } from "react";
import "./DescripcionSection.css";

const images = [
  "/images/Sesión Sin Rumbo Fijo_202500520_300ppp.jpg",
  "/images/Sesión Sin Rumbo Fijo_202500027_300ppp.jpg",
  "/images/Sesión Sin Rumbo Fijo_202500345_300ppp.jpg",
  "/images/Sesión Sin Rumbo Fijo_202500501_300ppp.jpg",
  "/images/Sesión Sin Rumbo Fijo_202500573_300ppp.jpg",
  "/images/srf.jpg",
];

export const DescripcionSection = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openCarousel = (idx) => {
    setActiveIndex(idx);
    setCarouselOpen(true);
  };
  const closeCarousel = () => setCarouselOpen(false);
  const prevImg = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="descripcion-section">
      <h2>Sobre Sin Rumbo Fijo</h2>
      <p>
        Sin Rumbo Fijo es una banda con sonido potente, que destila influencias del pop, blues y rock de los 80 con cambios de ritmo, fraseos de armónica y coros realmente pegadizos en cada una de sus canciones.<br /><br />
        La banda se fundó en 2021 pero ya existía desde mucho antes. Los guitarristas Luis Cobas y Alberto Boluda llevan desde primaria componiendo las primeras pinceladas de lo que es hoy Sin Rumbo fijo. Encontraron en Alejandro Losana (cantante) una voz original y cálida que no sonara convencional. Y con Jaime Mateos (bajo) y Andrés Lázaro (batería), ficharon la personalidad, energía y agresividad del rock n roll para convertir sus conciertos en autenticas montañas rusas.
      </p>
      <div className="galeria-fotos">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Sin Rumbo Fijo ${idx + 1}`}
            onClick={() => openCarousel(idx)}
            className="galeria-thumb"
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      {carouselOpen && (
        <div className="carousel-modal" onClick={closeCarousel}>
          <div className="carousel-content" onClick={e => e.stopPropagation()}>
            <button className="carousel-close" onClick={closeCarousel}>&times;</button>
            <button className="carousel-nav left" onClick={prevImg}>&lt;</button>
            <img src={images[activeIndex]} alt={`Sin Rumbo Fijo ampliada ${activeIndex + 1}`} className="carousel-img" />
            <button className="carousel-nav right" onClick={nextImg}>&gt;</button>
          </div>
        </div>
      )}
      {/* Panel EP eliminado, ahora en sección Música */}
    </section>
  );
};
