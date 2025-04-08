import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Auth.css';

const UpdateProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        alert('No access token found. Please log in.');
        navigate('/login');
        return;
      }
      const response = await api.put('/auth/profile/update', { email, password }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSuccessMessage('Updated Successfully');
      setEmail(''); // Clear the email field
      setPassword(''); // Clear the password field
      setTimeout(() => {
        navigate('/hi');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="auth-container">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="New Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      {successMessage && (
        <div className="success-message" style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
          {successMessage}
        </div>
      )}
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UpdateProfile;
