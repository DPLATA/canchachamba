import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import './JobCard.css';
import { jobs } from '../jobs';

function LandingPage() {
    
  const latestJobs = jobs.slice(-3);

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="container">
          <h1>Tu mejor opción para encontrar empleos deportivos en América Latina</h1>
          <p>Conectamos talentos con las mejores oportunidades en la industria deportiva</p>
          {/*<div className="search-bar">
            <input type="text" placeholder="Buscar empleos, equipos, ubicaciones..." />
            <button className="btn btn-secondary">Buscar</button>
          </div>*/}
        </div>
      </section>

      <section className="latest-jobs">
        <div className="container">
          <h2>Últimos Empleos</h2>
          <div className="job-list">
          {latestJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-card-header">
              <img alt={job.company} className="company-logo" src={job.src}/>
              <div>
                <h2 className="job-title">{job.title}</h2>
                <p className="company-name">{job.company}</p>
              </div>
            </div>
            <p className="job-location">{job.location}</p>
            <div className="job-card-footer">
              <Link to={`/jobs/${job.id}`} className="btn btn-primary">Ver Detalles</Link>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Aplicar</a>
            </div>
          </div>
        ))}
      </div>
        </div>
      </section>

      {/*<section className="post-job">
        <div className="container">
          <h2>Publica tu oferta de empleo</h2>
          <div className="button-group">
            <Link to="/post-job" className="btn btn-primary">Publicar oferta gratis</Link>
            <Link to="/pricing" className="btn btn-secondary">Ver planes destacados</Link>
          </div>
        </div>
      </section>*/}

      <footer className="main-footer">
        <div className="container">
          <div className="footer-section">
            <h3>Navegación</h3>
            <ul>
              <li><Link to="/jobs">Todos los empleos</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">Acerca de</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Empleos por Deporte</h3>
            <ul>
              <li><Link to="/jobs/futbol">Fútbol</Link></li>
              <li><Link to="/jobs/baloncesto">Baloncesto</Link></li>
              <li><Link to="/jobs/tenis">Tenis</Link></li>
              <li><Link to="/jobs/atletismo">Atletismo</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Políticas</h3>
            <ul>
              <li><Link to="/privacy">Política de Privacidad</Link></li>
              <li><Link to="/terms">Términos de Uso</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociales</h3>
            <ul>
              {/*<li><a href="https://twitter.com/deportetrabajo" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://facebook.com/deportetrabajo" target="_blank" rel="noopener noreferrer">Facebook</a></li>*/}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;