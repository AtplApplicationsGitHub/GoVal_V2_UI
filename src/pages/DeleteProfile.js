import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Auth.css';

const DeleteProfile = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('access_token');
      await api.delete('/auth/profile/delete', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSuccessMessage('Deleted Successfully');
      localStorage.removeItem('access_token');
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Delete Profile</h2>
      <button onClick={handleDelete}>Confirm Delete</button>
      {successMessage && (
        <div className="success-message" style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
          {successMessage}
        </div>
      )}
      <br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>    
  );
};

export default DeleteProfile;
