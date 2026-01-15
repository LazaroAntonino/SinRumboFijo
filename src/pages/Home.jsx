import React, { useState } from "react";
import "./Home.css";
import { HomeContent } from "../components/sections/HomeContent";
import { MusicSection } from "../components/sections/MusicSection";
import { GiraSection } from "../components/sections/GiraSection";
import { NewsSection } from "../components/sections/NewsSection";
import { EntradasSection } from "../components/sections/EntradasSection";
import { Footer } from "../components/Footer";

const heroImages = [
  "/images/banda-srf.png",
  "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1600&q=80",
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
        return <GiraSection />;
      case "noticias":
        return <NewsSection />;
      case "entradas":
        return <EntradasSection />;
      default:
        return <HomeContent />;
    }
  };

  const showHero = activeSection === "home";

  return (
    <div className="home-page">
      <nav className="nav">
        <div className="brand">Sin Rumbo Fijo</div>

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
            className={`nav-link-btn ${activeSection === "musica" ? "active" : ""}`}
            onClick={() => handleNavClick("musica")}
          >
            Música
          </button>
          <button
            className={`nav-link-btn ${activeSection === "gira" ? "active" : ""}`}
            onClick={() => handleNavClick("gira")}
          >
            Gira
          </button>
          <button
            className={`nav-link-btn ${activeSection === "noticias" ? "active" : ""}`}
            onClick={() => handleNavClick("noticias")}
          >
            Noticias
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
                  className={`carousel-slide ${index === 0 ? 'slide-banda' : ''}`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              {/* Duplicate first slide for seamless loop */}
              <div
                className="carousel-slide slide-banda"
                style={{ backgroundImage: `url(${heroImages[0]})` }}
              />
            </div>
            <div className="carousel-overlay" />
            <div className="hero-copy">
              <p className="eyebrow">Nuevo Álbum · 2026</p>
              <h1>
                Ruido, luces y piel de gallina. <span>Bienvenido al show.</span>
              </h1>
              <p className="lede">
                Vibramos en rojo neón: guitarras encendidas, bajos densos y voces
                que queman. Descubre el pulso eléctrico de la banda.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#musica">
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
