import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';
import './Logout.scss'; // Add your styles for the logout page

const Logout = () => {
  const { logout } = useContext(AuthContext); // Assuming you have a logout function in context
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from the AuthContext
      navigate("/login"); // Redirect to login page after successful logout
    } catch (err) {
      console.error("Logout failed", err);
      // Optionally handle error
    }
  };

  return (
    <div className='logout'>
      <div className="card">
        <h1>Logout</h1>
        <p>Are you sure you want to log out?</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
