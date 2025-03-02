import React, { useState } from "react";
import Scroll from "./Scroll";
import "./App.css"; // Добавь стили, если нужно

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Scroll onChange={setActiveIndex}>
      {/* Блок 1: Главный заголовок */}
      <div className="section title-section">
        <h1>PYTHON BACKEND DEVELOPER</h1>
      </div>

      {/* Блок 2: About Me */}
      <div className="section about-section">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Я опытный бэкенд-разработчик, специализирующийся на Python.</p>
        </div>
        <img src="/me.jpg" alt="My Photo" className="about-photo" />
      </div>

      {/* Блок 3: My Projects */}
      <div className="section projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">Проект 1</div>
          <div className="project-card">Проект 2</div>
          <div className="project-card">Проект 3</div>
        </div>
      </div>

      {/* Блок 4: My Skills */}
      <div className="section skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">Flask</div>
          <div className="skill-card">PostgreSQL</div>
        </div>
      </div>

      {/* Блок 5: My Contacts */}
      <div className="section contacts-section">
        <h2>My Contacts</h2>
        <div className="contacts-grid">
          <a href="https://github.com" className="contact-card">GitHub</a>
          <a href="https://linkedin.com" className="contact-card">LinkedIn</a>
          <a href="mailto:me@example.com" className="contact-card">Email</a>
        </div>
      </div>

      {/* Блок 6: Write Me */}
      <div className="section write-me-section">
        <h2>Write Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </Scroll>
  );
};

export default App;
