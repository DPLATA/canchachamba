import React, { useState } from 'react';
import './Profile.css';

function HiringProfile() {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job posting logic here
    console.log({ companyName, jobTitle, jobDescription, location, salary });
  };

  return (
    <div className="container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h1>Publicar un Empleo</h1>
        <div className="form-group">
          <label htmlFor="companyName">Nombre de la Empresa</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Título del Empleo</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Descripción del Empleo</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="location">Ubicación</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Rango Salarial</label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="ej. $50,000 - $70,000"
          />
        </div>
        <button type="submit" className="btn btn-primary">Publicar Empleo</button>
      </form>
    </div>
  );
}

export default HiringProfile;