import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';
import { jobs } from '../jobs';

function JobListing() {

  return (
    <div className="container">
      <h1 className="mb-4">Empleos</h1>
      <div className="job-list">
        {jobs.map((job) => (
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
  );
}

export default JobListing;