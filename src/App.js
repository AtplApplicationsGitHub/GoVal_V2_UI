import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Hi from './pages/Hi';
import UpdateProfile from './pages/UpdateProfile';
import DeleteProfile from './pages/DeleteProfile';
import './App.css';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/hi' && location.pathname !== '/update-profile' && location.pathname !== '/delete-profile' && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hi" element={<Hi />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/delete-profile" element={<DeleteProfile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;