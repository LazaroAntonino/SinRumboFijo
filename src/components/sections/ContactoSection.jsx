import React, { useState } from "react";
import "./ContactoSection.css";

export const ContactoSection = () => {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío (API, mailto, etc.)
    setSent(true);
  };

  return (
    <section className="contacto-section">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Tu correo
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Asunto
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mensaje
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button className="btn primary" type="submit">Enviar</button>
      </form>
      {sent && <p className="sent-msg">¡Mensaje enviado! Nos pondremos en contacto pronto.</p>}
      <div className="contacto-extra">
        <p>También puedes encontrarnos en redes sociales:</p>
        <ul>
          <li><a href="https://instagram.com/sinrumbofijo" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com/sinrumbofijo" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </section>
  );
};
