import React, { useState } from 'react';
import './Profile.css';

function CandidateProfile() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log({ name, bio, skills });
  };

  return (
    <div className="container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h1>Perfil del Candidato</h1>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Biografía</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="skills">Habilidades (separadas por comas)</label>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Currículum</label>
          <input
            type="file"
            id="resume"
          />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar Perfil</button>
      </form>
    </div>
  );
}

export default CandidateProfile;