import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Auth.css';

const DeleteProfile = () => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await api.delete('/auth/profile/delete', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert(response.data.message);
      localStorage.removeItem('access_token'); // Clear the token
      navigate('/login');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Delete Profile</h2>
      <button onClick={handleDelete}>Confirm Delete</button>
    </div>
  );
};

export default DeleteProfile;