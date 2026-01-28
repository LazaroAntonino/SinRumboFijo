import React, { useState } from "react";
import "./Home.css";
import { HomeContent } from "../components/sections/HomeContent";
import { MusicSection } from "../components/sections/MusicSection";
import { GiraSection as ConciertosSection } from "../components/sections/GiraSection";
import { NewsSection } from "../components/sections/NewsSection";
import { EntradasSection } from "../components/sections/EntradasSection";
import { DescripcionSection } from "../components/sections/DescripcionSection";
// import { EventosSection } from "../components/sections/EventosSection";
import { DossierSection } from "../components/sections/DossierSection";
import { MerchSection } from "../components/sections/MerchSection";
import { ContactoSection } from "../components/sections/ContactoSection";
import { Footer } from "../components/Footer";

const heroImages = [
  "/images/Sesion-SinRumboFijo-hero.jpg", // Nueva imagen (será la primera en el carrusel)
  "/images/srf.jpg", // Imagen anterior (renombrada)
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
];

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const renderActiveContent = () => {
    switch (activeSection) {
      case "musica":
        return <MusicSection />;
      case "gira":
        return <ConciertosSection />;
      case "noticias":
        return <NewsSection />;
      case "entradas":
        return <EntradasSection />;
      case "descripcion":
        return <DescripcionSection />;
      // case "eventos":
      //   return <EventosSection />;
      case "dossier":
        return <DossierSection />;
      case "merch":
        return <MerchSection />;
      case "contacto":
        return <ContactoSection />;
      default:
        return <HomeContent />;
    }
  };

  const showHero = activeSection === "home";

  return (
    <div className="home-page">
      <nav className="nav">
        <div className="brand" style={{display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem'}} onClick={() => handleNavClick('home')}>
          <img src="/images/Logo2_Front.png" alt="Logo Sin Rumbo Fijo" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 6px #eee', marginRight: '0.5rem' }} />
          Sin Rumbo Fijo
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button
            className={`nav-link-btn ${activeSection === "home" ? "active" : ""}`}
            onClick={() => handleNavClick("home")}
          >
            Inicio
          </button>
          <button
            className={`nav-link-btn ${activeSection === "descripcion" ? "active" : ""}`}
            onClick={() => handleNavClick("descripcion")}
          >
            Descripción
          </button>
          {/* Eventos eliminado, ahora se usa Gira para esto */}
          <button
            className={`nav-link-btn ${activeSection === "musica" ? "active" : ""}`}
            onClick={() => handleNavClick("musica")}
          >
            Música
          </button>
          <button
            className={`nav-link-btn ${activeSection === "gira" ? "active" : ""}`}
            onClick={() => handleNavClick("gira")}
          >
            Conciertos
          </button>
          {/* Noticias oculto
          <button
            className={`nav-link-btn ${activeSection === "noticias" ? "active" : ""}`}
            onClick={() => handleNavClick("noticias")}
          >
            Noticias
          </button>
          */}
          <button
            className={`nav-link-btn ${activeSection === "dossier" ? "active" : ""}`}
            onClick={() => handleNavClick("dossier")}
          >
            Dossier
          </button>
          <button
            className={`nav-link-btn ${activeSection === "merch" ? "active" : ""}`}
            onClick={() => handleNavClick("merch")}
          >
            Merch
          </button>
          <button
            className={`nav-link-btn ${activeSection === "contacto" ? "active" : ""}`}
            onClick={() => handleNavClick("contacto")}
          >
            Contacto
          </button>
          <button
            className="ticket-button mobile"
            onClick={() => handleNavClick("entradas")}
          >
            Entradas
          </button>
        </div>

        <button
          className="ticket-button desktop"
          onClick={() => handleNavClick("entradas")}
        >
          Entradas
        </button>
      </nav>

      {showHero && (
        <header className="hero-section" id="inicio">
          <div className="carousel">
            <div className="carousel-track">
              {heroImages.map((src, index) => (
                <div
                  key={src + index}
                  className={`carousel-slide${
                    index === 0 ? ' slide-banda' : ''
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              {/* Elimina la duplicación de la primera slide para evitar que se vea dos veces */}
            </div>
            <div className="carousel-overlay" />
            <div className="hero-copy">
              <p className="eyebrow">Nuevo EP</p>
              <h1>
                Ruido, luces y piel de gallina. <span>Bienvenido al show.</span>
              </h1>
              <p className="lede">
                Vibramos en rojo neón: guitarras encendidas, bajos densos y voces
                que queman. Descubre el pulso eléctrico de la banda.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="https://open.spotify.com/intl-es/artist/6oA9yOYKAPLPXk1t2gr2Mr?si=M_66HtlkRbWW7iXtDJv3KQ" target="_blank" rel="noopener noreferrer">
                  Escuchar ahora
                </a>
                <a className="btn ghost" href="#gira">
                  Ver fechas
                </a>
              </div>
            </div>
          </div>
        </header>
      )}

      <main className={`page-content ${showHero ? "" : "with-padding"}`}>
        {renderActiveContent()}
      </main>

      <Footer />
    </div>
  );
};
