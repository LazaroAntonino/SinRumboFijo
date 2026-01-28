import React from "react";
import { FaInstagram, FaTiktok, FaSpotify } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link" style={{ marginBottom: '10px', display: 'inline-block' }}>Contacto</a>
        </div>
        
        <div className="footer-socials">
          <a 
            href="https://www.instagram.com/sinrumbofijomusic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.tiktok.com/@sinrumbofijomusic" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a 
            href="https://open.spotify.com/intl-es/artist/6oA9yOYKAPLPXk1t2gr2Mr?si=M_66HtlkRbWW7iXtDJv3KQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="Spotify"
          >
            <FaSpotify />
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>© 2026 SIN RUMBO FIJO</p>
        </div>
      </div>
    </footer>
  );
};
