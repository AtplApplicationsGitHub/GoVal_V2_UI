import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hi = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Clear the token
    navigate('/login');
  };

  const handleUpdate = () => {
    navigate('/update-profile');
  };

  const handleDelete = () => {
    navigate('/delete-profile');
  };

  return (
    <div>
      <h2>Hi</h2>
      <button onClick={handleUpdate}>Update Profile</button>
      <button onClick={handleDelete}>Delete Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Hi;