import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobs } from '../jobs';


function JobDetail() {
  const { id } = useParams();

  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">{job.title}</h1>
        <div className="company-info">
          <img src={job.src} alt={`${job.company} logo`} className="company-logo" />
          <div>
            <h2>{job.company}</h2>
            <p>{job.location}</p>
          </div>
        </div>
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Aplicar</a>
        <Link to="/jobs" className="btn btn-secondary mt-2">Volver</Link>
      </div>
    </div>
  );
}

export default JobDetail;