import './App.css'
import { useState, useRef } from 'react'

import HomePage from './pages/home/home';
import EducationPage from './pages/education/education';
import ProjectsPage from './pages/projects/projects';
import ExperiencePage from './pages/expriences/experience';
import SkillsPage from './pages/skills/skills';
import CertificationsPage from './pages/certifications/certifications';
import SemTraPage from './pages/seminar_training/semtra';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const constainerRef = useRef(null);
  const [activeBg, setActiveBg] = useState('bg-home');

  const scrollToSection = (id, bgClass) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
      });
      setActiveBg(bgClass);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`main-container ${activeBg}`}>
        <nav className='navbar-container'>
          <h2 className='logo'>My Portfolio</h2>
          <button
            className="btn-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <button
              className="link-btn"
              onClick={() => scrollToSection('home', 'bg-home')}
            >Home</button>
            <button
              className="link-btn"
              onClick={() => scrollToSection('education', 'bg-education')}
            >Education</button>
            <button
              className="link-btn"
              onClick={() => scrollToSection('projects', 'bg-projects')}
            >Projects</button>
            <button
              className="link-btn"
              onClick={() => scrollToSection('experience', 'bg-experience')}
            >Experience</button>
            <button
              className="link-btn"
              onClick={() => scrollToSection('skills', 'bg-skills')}
            >Skills</button>
            <button
              className="link-btn"
              onClick={() => scrollToSection('certifications', 'bg-certifications')}
            >Certifications</button>
            <button
              className="link-btn"
              onClick={() => scrollToSection('training-seminar', 'bg-training')}
            >
              Training & Seminar
            </button>
          </div>
        </nav>

        <div className='horizontal-section-container' ref={constainerRef}>
          <section className='section-slide' id='home'>
            <HomePage />
          </section>
          <section className='section-slide' id='education'>
            <EducationPage />
          </section>
          <section className='section-slide' id='projects'>
            <ProjectsPage />
          </section>
          <section className='section-slide' id='experience'>
            <ExperiencePage />
          </section>
          <section className='section-slide' id='skills'>
            <SkillsPage />
          </section>
          <section className='section-slide' id='certifications'>
            <CertificationsPage />
          </section>
          <section className='section-slide' id='training-seminar'>
            <SemTraPage />
          </section>
        </div>
        <footer className='footer'>
          <p>© 2026 Neil Raphael Ramos. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
