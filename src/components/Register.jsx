import React, { useState } from 'react';

function Register() {
  const [userType, setUserType] = useState('candidate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="card" style={{maxWidth: '400px', margin: '0 auto'}}>
      <h1 className="card-title">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userType">I am a</label>
          <select
            id="userType"
            className="form-control"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="candidate">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  );
}

export default Register;