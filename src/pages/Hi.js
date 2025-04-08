import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hi = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  const handleUpdate = () => {
    navigate('/update-profile');
  };

  const handleDelete = () => {
    navigate('/delete-profile');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: '2rem',
      color: '#333',
      marginBottom: '20px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    logout: {
      backgroundColor: '#dc3545',
    },
    logoutHover: {
      backgroundColor: '#c82333',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome!</h2>
      <div style={styles.buttonGroup}>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          onClick={handleUpdate}
        >
          Update Profile
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          onClick={handleDelete}
        >
          Delete Profile
        </button>
        <button
          style={{ ...styles.button, ...styles.logout }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.logoutHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.logout.backgroundColor)}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Hi;
